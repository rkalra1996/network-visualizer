import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-graph-d3-visualizer',
  templateUrl: './graph-d3-visualizer.component.html',
  styleUrls: ['./graph-d3-visualizer.component.scss']
})
export class GraphD3VisualizerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.d3SimpleGraph();
  }
// for simple node graph
  private d3SimpleGraph() : void{
    var width = window.innerWidth;
    var height = window.innerHeight;
    var lineLength = 130;
  
   var data = {
    nodes: [
    {
    id: "Sean Connery",
    group: 1,
    },
    {
    id: "Roger Moore",
    group: 2,
    },
    {
    id: "Pierce Brosnan",
    group: 3,
    },
    {
    id: "Ghost Ship",
    group: 1,
    },
    {
    id: "Gestolene Herzen",
    group: 2,
    },
    {
    id: "Band of Brothers",
    group: 3,
    },
    {
    id: "Mit aller Macht",
    group: 2,
    },
    {
    id: "Iron Man",
    group: 1,
    },
    {
    id: "Exit",
    group: 3,
    },
    {
    id: "Mission: Impossible",
    group: 2,
    },
    ],
    links: [
    {
    source: "Ghost Ship",
    target: "Sean Connery",
    type: "Knows",
    value: 2,
    },
    {
    source: "Gestolene Herzen",
    target: "Sean Connery",
    type: "Knows",
    value: 1,
    },
    {
    source: "Mission: Impossible",
    target: "Sean Connery",
    type: "Knows",
    value: 3,
    },
    {
    source: "Mit aller Macht",
    target: "Roger Moore",
    type: "Knows",
    value: 1,
    },
    {
    source: "Band of Brothers",
    target: "Pierce Brosnan",
    type: "Knows",
    value: 1,
    },
    {
    source: "Sean Connery",
    target: "Iron Man",
    type: "Freinds",
    value: 2,
    },
    {
    source: "Roger Moore",
    target: "Mission: Impossible",
    type: "Freinds",
    value: 1,
    },
    {
    source: "Pierce Brosnan",
    target: "Exit",
    type: "Freinds",
    value: 3,
    },
    {
    source: "Pierce Brosnan",
    target: "Pierce Brosnan",
    type: "Freinds",
    value: 1,
    },
    {
    source: "Exit",
    target: "Sean Connery",
    type: "Knows",
    value: 3,
    },
    {
    source: "Sean Connery",
    target: "Band of Brothers",
    type: "Freinds",
    value: 2,
    },
    {
    source: "Roger Moore",
    target: "Band of Brothers",
    type: "Freinds",
    value: 1,
    },
    ],
    };
 
  var svg = d3.select('#canvas').append('svg')
  .attr('width', width)
  .attr('height', height);
  const links = data.links.map(d => Object.create(d));
  const nodes = data.nodes.map(d => Object.create(d));

  var tooltip = d3.select("body")
	.append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);


  const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d['id']).distance(lineLength))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));
   
  const link = svg.append("g")
      .attr("stroke", "#000")
      .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

  const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("r", 15)
      .attr("fill", this.color())
      .call(this.drag(simulation));
      
  
  // node.append("title")
  //     .text(function (d) {return d.id;});

  node.append("text")
      .attr("dy", -3)
      .text(function (d) {return "Name :"+d.label;});
  
  link.append("title")
            .text(function (d) {return d.type;});
            var edgepaths = svg.selectAll(".edgepath")
            .data(links)
            .enter()
            .append('path')
            .attr('class', 'edgepath')
            .attr('fill-opacity', 0)
            .attr('stroke-opacity', 0)
            .attr('id', function (d, i) {return 'edgepath' + i})
            .style("pointer-events", "none");

   var edgelabels = svg.selectAll(".edgelabel")
            .data(links)
            .enter()
            .append('text')
            .style("pointer-events", "none")
            .attr('class', 'edgelabel')
            .attr('id', function (d, i) {return 'edgelabel' + i})
            .attr('font-size', 10)
            .attr('fill','#aaa');

        edgelabels.append('textPath')
            .attr('xlink:href', function (d, i) {return '#edgepath' + i})
            .style('text-anchor', 'middle')
            .style("pointer-events", "none")
            .attr("startOffset", "50%")
            .text(function (d) {return d.type});

  simulation.on("tick", () => {
    edgepaths.attr('d', function (d) {
      return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
  });

  edgelabels.attr('transform', function (d) {
      if (d.target.x < d.source.x) {
          var bbox = this.getBBox();
          var rx = bbox.x + bbox.width / 2;
          var ry = bbox.y + bbox.height / 2;
          return 'rotate(180 ' + rx + ' ' + ry + ')';
      }
      else {
          return 'rotate(0)';
      }
  });
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .on('mouseover.tooltip', function(d) {
          tooltip.transition()
            .duration(300)
            .style("opacity", .8);
          tooltip.html("Project:" + d.id + "<p/>T:" + d.T + "<p/>Q:" + d.Q)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 10) + "px");
        })
        .on("mouseout.tooltip", function() {
          tooltip.transition()
            .duration(100)
            .style("opacity", 0);
        });
  });




  }
  drag = simulation => {
  
    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }
    
    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
  }
  color() {
    const scale = d3.scaleOrdinal(d3.schemeCategory10);
    return d => scale(d.group);
  }
  
}
