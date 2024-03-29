<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class TetrahedralSolidModifier


```cpp
Inherits from VerticesModifier
```



## Records

SidedSolidSplitEdgeInfo

AlongSolidSplitEdgeInfo

SolidSplitEdgeInfo

SolidSplitInfo

SolidCollapseEdgeInfo

SolidSwapFacetInfo

SolidSwapEdgeInfo

SolidRemoveMultipleAdjacencyInfo

Impl



## Functions

### TetrahedralSolidModifier

```cpp
public void TetrahedralSolidModifier(const TetrahedralSolid3D & solid, TetrahedralSolidBuilder3D & builder)
```


### TetrahedralSolidModifier

```cpp
public void TetrahedralSolidModifier(TetrahedralSolidModifier && other)
```


### ~TetrahedralSolidModifier

```cpp
public void ~TetrahedralSolidModifier()
```


### is_tetrahedron_active

```cpp
public bool is_tetrahedron_active(index_t tetrahedron_id)
```


### is_facet_active

```cpp
public bool is_facet_active(index_t facet_id)
```


### split_tetrahedron

```cpp
public SolidSplitInfo split_tetrahedron(index_t tetrahedron_id, const Point3D & point)
```


 Split a tetrahedron into four new tetrahedra.

**tetrahedron_id** [in] Index of the tetrahedron to split.

**point** [in] Coordinates of the split point.

**warning** Given tetrahedron is set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### split_facet

```cpp
public SolidSplitInfo split_facet(index_t facet_id, const Point3D & point)
```


 Split a facet into three new ones. The tetrahedra incident to this facet are also split into three new tetrahedra.

**facet_id** [in] Unique index of the facet to split.

**point** [in] Coordinates of the split point.

**warning** Split tetrahedra are set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### split_facet

```cpp
public SolidSplitInfo split_facet(const PolyhedronFacet & facet, const Point3D & point)
```


 Split a facet into three new ones. The tetrahedra incident to this facet are also split into three new tetrahedra.

**facet** [in] Index of the PolyhedronFacet to split.

**point** [in] Coordinates of the split point.

**warning** Split tetrahedra are set as inactive but not deleted.

**details** Edge unique index is found and then the above function is called.

**return** new vertex index and mappings between old and new mesh.

### split_edge

```cpp
public SolidSplitEdgeInfo split_edge(index_t edge_id, const Point3D & point)
```


 Split an edge into two new ones. Each tetrahedron incident to this edge is also split into two new tetrahedra.

**edge_id** [in] Unique index of the edge to split.

**point** [in] Coordinates of the split point.

**warning** Split tetrahedra are set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### split_edge

```cpp
public SolidSplitEdgeInfo split_edge(const PolyhedronFacetEdge & edge, const Point3D & point)
```


 Split an edge into two new ones. Each tetrahedron incident to this edge is also split into two new tetrahedra.

**edge** [in] Index of the PolyhedronFacetEdge to split.

**point** [in] Coordinates of the split point.

**warning** Split tetrahedra are set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### collapse_edge

```cpp
public SolidCollapseEdgeInfo collapse_edge(const PolyhedronFacetEdge & edge, const Point3D & point)
```


 Collapse an edge. The tetrahedra incident to this edge are set as inactive but not deleted.

**edge** [in] Index of the PolyhedronFacetEdge to collapse.

**point** [in] Coordinates of the collapse point.

**return** new vertex index and mappings between old and new mesh.

### collapse_edge

```cpp
public SolidCollapseEdgeInfo collapse_edge(index_t edge_id, const Point3D & point)
```


 Collapse an edge. The tetrahedra incident to this edge are set as inactive but not deleted.

**edge_id** [in] Unique index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

**return** new vertex index and mappings between old and new mesh.

### swap_facet

```cpp
public SolidSwapFacetInfo swap_facet(const PolyhedronFacet & facet)
```


 Swap a facet. Two tetrahedra should be incident to this facet. These two tetrahedra are set as inactive and three new tetrahedra are created.

**facet** [in] Index of the PolyhedronFacet to swap.

**warning** Old tetrahedra are set as inactive but not deleted.

### swap_edge

```cpp
public SolidSwapEdgeInfo swap_edge(const PolyhedronFacetEdge & edge, index_t apex)
```


 Swap an edge. The edge can be on border. The tetrahedra around given edge are set as inactive and new tetrahedra are created.

**edge** [in] Index of the PolyhedronFacetEdge to swap.

**apex** [in] Index of the vertex used as the new facets fan common vertex.

**warning** Old tetrahedra are set as inactive but not deleted.

### remove_double_adjacency

```cpp
public SolidRemoveMultipleAdjacencyInfo remove_double_adjacency(const PolyhedronFacetEdge & edge)
```


 Remove an edge bearing a double adjacency. The two tetrahedra around given edge are set as inactive.

**edge** [in] Index of the PolyhedronFacetEdge shared by the two PolyhedronFacet adjacent to the same tetrahedron.

**warning** Old tetrahedra are set as inactive but not deleted.

### remove_triple_adjacency

```cpp
public SolidRemoveMultipleAdjacencyInfo remove_triple_adjacency(const PolyhedronVertex & vertex)
```


 Remove a vertex bearing a triple adjacency. The two tetrahedra around given vertex are set as inactive.

**vertex** [in] Index of the PolyhedronVertex shared by the three PolyhedronFacet adjacent to the same tetrahedron.

**warning** Old tetrahedra are set as inactive but not deleted.

### clean_tetrahedra

```cpp
public vector clean_tetrahedra()
```


 Clean up the mesh removing inactive tetrahedra

**return** old2new mappings for tetrahedra

### clean_vertices

```cpp
public vector clean_vertices()
```


 Clean up the mesh removing isolated vertices

**return** old2new mappings for vertices

**warning** This method should be called after clean_tetrahedra()

### clean_edges

```cpp
public vector clean_edges()
```


 Clean up the mesh removing edges

**return** old2new mappings for edges

**warning** This method should be called after clean_tetrahedra()

### clean_facets

```cpp
public vector clean_facets()
```


 Clean up the mesh removing facets

**return** old2new mappings for facets

**warning** This method should be called after clean_tetrahedra()

### clean

```cpp
public std::tuple<std::vector<index_t>, std::vector<index_t>, std::vector<index_t>, std::vector<index_t> > clean()
```

 Clean up the mesh removing inactive tetrahedra, isolated vertices, edges and facets.

**return** old2new mappings for tetrahedra, vertices, edges and facets.

### solid

```cpp
protected const TetrahedralSolid3D & solid()
```




