import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';

@Component({
  selector: 'app-graph-d3-visualizer',
  templateUrl: './graph-d3-visualizer.component.html',
  styleUrls: ['./graph-d3-visualizer.component.scss']
})
export class GraphD3VisualizerComponent implements OnInit {

  public graphData = {};
  public data = {};
  constructor(private graphService : GraphDataService) { }
  

  ngOnInit() {
    this.displayInitialGraph();
   }

  displayInitialGraph() {
    this.graphService.getInitialDataV2().subscribe(result => {
      console.log('recieved data from graph service', result);
      
      if (result.hasOwnProperty('seperateNodes')) {
        var nodes = [];
        result['seperateNodes'].filter(node => {
          nodes.push({id: node.id, label: node.label});
        })
      }
      this.graphData['nodes'] = nodes;
      if (result.hasOwnProperty('seperateEdges')) {
        var edges = [];
        result['seperateEdges'].filter(edge => {
          edges.push({source: edge.from, target: edge.to, type: edge.type, value: 1});
        })
      }
      this.graphData['links'] = edges;
      console.log('graphData :', this.graphData);
      // display data
      this.d3SimpleGraph();
      
    }, err => {
      console.error('An error occured while retrieving initial graph data', err);
      this.graphData = {};
    });
  }

  private d3SimpleGraph() : void{
        var width = window.innerWidth;
        var height = window.innerHeight;
        var lineLength = 130;
        
        var svg = d3.select('#canvas').append('svg')
        .attr('width', width)
        .attr('height', height);
        const links = this.graphData['links'].map(d => Object.create(d));
        const nodes = this.graphData['nodes'].map(d => Object.create(d));

        var tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);


        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d['id']).distance(lineLength))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("charge", d3.forceManyBody().strength(-800)) // Nodes are attracted one each other of value is > 0
            .force("collide", d3.forceCollide().strength(.1).radius(45).iterations(1)) // Force that avoids circle overlapping

        const link = svg.append("g")
            .attr("stroke", "#000")
            .attr("stroke-opacity", 0.6)
          .selectAll("line")
          .data(links)
          .join("line")
        .attr("stroke-width", d => Math.sqrt(d['value']));

        const node = svg.append("g")
            .attr("stroke", "#fff") // for the border of circle
            .attr("stroke-width", 1.5) // for the border of circle
          .selectAll("circle")
          .data(nodes)
          .join("circle")
            .attr("r", 25) // circle radius
            .attr("fill", this.color()) // circle color
            .call(this.drag(simulation));
            
        
        // node.append("title")
        //     .text(function (d) {return d.id;});

        // node.append("text")
        //     .attr("dx", 12)
        //     .attr("dy", ".3em")
        //     .text(function (d) {return d['label'];});
        
        link.append("title")
                  .text(function (d) {return d['type'];});
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
                  .text(function (d) {return d['type']});

        simulation.on("tick", () => {
          edgepaths.attr('d', function (d) {
            return 'M ' + d['source'].x + ' ' + d['source'].y + ' L ' + d['target'].x + ' ' + d['target'].y;
        });

        edgelabels.attr('transform', function (d) {
            if (d['target'].x < d['source'].x) {
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
              .attr("x1", d => d['source'].x)
              .attr("y1", d => d['source'].y)
              .attr("x2", d => d['target'].x)
              .attr("y2", d => d['target'].y);

          node
              .attr("cx", d => d['x'])
              .attr("cy", d => d['y'])
              .on('mouseover.tooltip', function(d) {
                tooltip.transition()
                  .duration(300)
                  .style("opacity", .8);
                tooltip.html("Project:" + d['id'] + "<p/>T:" + d['T'] + "<p/>Q:" + d['Q'])
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
