let dataset = [];

req = new XMLHttpRequest();
req.open(
  "GET",
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
  true
);

req.send();
req.onload = function() {
  json = JSON.parse(req.responseText);
  json.data.forEach(function(d) {
    dataset.push(d);
  });

  const w = 1000;
  const h = 500;
  const padding = 60;

  let minDate = new Date(dataset[0][0]);
  let maxDate = new Date(dataset[json.data.length - 1][0]);
  let tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .attr("id", "tooltip")
    .style("opacity", 0);

  const xScale = d3
    .scaleTime()
    .domain([minDate, maxDate])
    .range([padding, w - padding]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset, d => d[1])])
    .range([h - padding, padding]);
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
    
  const barWidth = (w - padding * 2) / dataset.length;

  svg
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("data-date", d => d[0])
    .attr("data-gdp", d => d[1])
    .attr("width", barWidth)
    .attr("height", d => h - padding - yScale(d[1]))
    .attr("x", (d, i) => barWidth * i + padding)
    .attr("y", d => yScale(d[1]))
    .style("color","#FFD0BC")
    .on("mouseover", function(d) {
      date = new Date(d[0]);

      quarter = Math.ceil((date.getMonth() + 1) / 3);
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 0.9);
      tooltip
        .html(
          date.getFullYear() +
            " Quarter " + quarter + "<br> $" +
            d[1].toLocaleString("en") + "B"
        )
        .style("left", d3.event.pageX + 20 + "px")
        .style("top", d3.event.pageY + 20 + "px");
      tooltip.attr("data-date", d[0]);
    })
    .on("mouseout", function(d) {
      tooltip.transition().duration(400).style('opacity', 0);
    });
    
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);
  svg
    .append("g")
    .attr("id", "y-axis")
    .attr("transform", "translate(" + padding + ", 0)")
    .call(yAxis);  
};
