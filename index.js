import cytoscape from 'cytoscape';
import elk from 'cytoscape-elk';

let elk = require('cytoscape-elk');
var cy = cytoscape({
  container: document.getElementById('cy'),

  elements: [
    { data: { id: 'a' } },
    { data: { id: 'b' } },
    { data: { id: 'c' } },
    { data: { id: 'd' } },
    { data: { id: 'f' } },
    { data: { id: 'e' } },
    {
      data: {
        id: 'ab',
        source: 'a',
        target: 'b'
      }
    },
    {
      data: {
        id: 'cb',
        source: 'c',
        target: 'b'
      }
    },
    {
      data: {
        id: 'ad',
        source: 'a',
        target: 'd'
      }
    },
    {
      data: {
        id: 'ef',
        source: 'e',
        target: 'f'
      }
    }],
    style: [
        {
            selector: 'node',
            style: {
                shape: 'hexagon',
                'background-color': 'red'
            }
        }]      
});
for (var i = 0; i < 10; i++) {
  var source = 'node' + i;
    cy.add({
        data: { id: source}
        }
    );
    cy.add({
        data: {
            id: 'edge' + i,
            source: source,
            target: (i % 2 == 0 ? 'a' : 'b')
        }
    });
}
cy.use(elk);
cy.layout({
    name: 'elk'
});