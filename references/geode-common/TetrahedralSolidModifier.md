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
Inherits from VerticesModifier, EdgesModifier, FacetsModifier, TetrahedraModifier
```



## Records

SidedSplitEdgeInfo

AlongSplitEdgeInfo

SplitEdgeInfo

SplitInfo

SplitFacetInfo

CollapseEdgeInfo

SplitCollapseInfo

SwapFacetInfo

SwapEdgeInfo

RemoveMultipleAdjacencyInfo

CleanMappings



## Functions

### TetrahedralSolidModifier

```cpp
public void TetrahedralSolidModifier(const TetrahedralSolidModifier & )
```


### operator=

```cpp
public TetrahedralSolidModifier & operator=(const TetrahedralSolidModifier & )
```


### TetrahedralSolidModifier

```cpp
public void TetrahedralSolidModifier(const TetrahedralSolid3D & solid, TetrahedralSolidBuilder3D & builder)
```


### TetrahedralSolidModifier

```cpp
public void TetrahedralSolidModifier(TetrahedralSolidModifier && other)
```


### operator=

```cpp
public TetrahedralSolidModifier & operator=(TetrahedralSolidModifier && other)
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


### inactive_tetrahedra

```cpp
public void inactive_tetrahedra(Span tetrahedra)
```


### split_tetrahedron

```cpp
public SplitInfo split_tetrahedron(index_t tetrahedron_id, const Point3D & point)
```


 Split a tetrahedron into four new tetrahedra.

**tetrahedron_id** [in] Index of the tetrahedron to split.

**point** [in] Coordinates of the split point.

**warning** Given tetrahedron is set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### split_facet

```cpp
public SplitFacetInfo split_facet(index_t facet_id, const Point3D & point)
```


 Split a facet into three new ones. The tetrahedra incident to this facet are also split into three new tetrahedra.

**facet_id** [in] Unique index of the facet to split.

**point** [in] Coordinates of the split point.

**warning** Split tetrahedra are set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### split_facet

```cpp
public SplitFacetInfo split_facet(const PolyhedronFacet & facet, const Point3D & point)
```


 Split a facet into three new ones. The tetrahedra incident to this facet are also split into three new tetrahedra.

**facet** [in] Index of the PolyhedronFacet to split.

**point** [in] Coordinates of the split point.

**warning** Split tetrahedra are set as inactive but not deleted.

**details** Edge unique index is found and then the above function is called.

**return** new vertex index and mappings between old and new mesh.

### split_edge

```cpp
public SplitEdgeInfo split_edge(index_t edge_id, const Point3D & point)
```


 Split an edge into two new ones. Each tetrahedron incident to this edge is also split into two new tetrahedra.

**edge_id** [in] Unique index of the edge to split.

**point** [in] Coordinates of the split point.

**warning** Split tetrahedra are set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### split_edge

```cpp
public SplitEdgeInfo split_edge(const PolyhedronFacetEdge & edge, const Point3D & point)
```


 Split an edge into two new ones. Each tetrahedron incident to this edge is also split into two new tetrahedra.

**edge** [in] Index of the PolyhedronFacetEdge to split.

**point** [in] Coordinates of the split point.

**warning** Split tetrahedra are set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(const PolyhedronFacetEdge & edge, const Point3D & point)
```


 Collapse an edge. The tetrahedra incident to this edge are set as inactive but not deleted.

**edge** [in] Index of the PolyhedronFacetEdge to collapse.

**point** [in] Coordinates of the collapse point.

**return** new vertex index and mappings between old and new mesh.

### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(index_t edge_id, const Point3D & point)
```


 Collapse an edge. The tetrahedra incident to this edge are set as inactive but not deleted.

**edge_id** [in] Unique index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

**return** new vertex index and mappings between old and new mesh.

### swap_facet

```cpp
public SwapFacetInfo swap_facet(const PolyhedronFacet & facet)
```


 Swap a facet. Two tetrahedra should be incident to this facet. These two tetrahedra are set as inactive and three new tetrahedra are created.

**facet** [in] Index of the PolyhedronFacet to swap.

**warning** Old tetrahedra are set as inactive but not deleted.

### swap_edge

```cpp
public SwapEdgeInfo swap_edge(const PolyhedronFacetEdge & edge, index_t apex)
```


 Swap an edge. The edge can be on border. The tetrahedra around given edge are set as inactive and new tetrahedra are created.

**edge** [in] Index of the PolyhedronFacetEdge to swap.

**apex** [in] Index of the vertex used as the new facets fan common vertex.

**warning** Old tetrahedra are set as inactive but not deleted.

### remove_double_adjacency

```cpp
public RemoveMultipleAdjacencyInfo remove_double_adjacency(const PolyhedronFacetEdge & edge)
```


 Remove an edge bearing a double adjacency. The two tetrahedra around given edge are set as inactive.

**edge** [in] Index of the PolyhedronFacetEdge shared by the two PolyhedronFacet adjacent to the same tetrahedron.

**warning** Old tetrahedra are set as inactive but not deleted.

### remove_triple_adjacency

```cpp
public RemoveMultipleAdjacencyInfo remove_triple_adjacency(const PolyhedronVertex & vertex)
```


 Remove a vertex bearing a triple adjacency. The two tetrahedra around given vertex are set as inactive.

**vertex** [in] Index of the PolyhedronVertex shared by the three PolyhedronFacet adjacent to the same tetrahedron.

**warning** Old tetrahedra are set as inactive but not deleted.

### split_collapse_edge

```cpp
public SplitCollapseInfo split_collapse_edge(const PolyhedronFacetEdge & edge, index_t apex)
```


### split_collapse_edge

```cpp
public SplitCollapseInfo split_collapse_edge(const PolyhedronFacetEdge & edge, index_t apex, const Point3D & point)
```


### split_collapse_facet

```cpp
public SplitCollapseInfo split_collapse_facet(const PolyhedronFacet & facet)
```


### split_collapse_facet

```cpp
public SplitCollapseInfo split_collapse_facet(const PolyhedronFacet & facet, const Point3D & point)
```


### split_split_collapse

```cpp
public SplitCollapseInfo split_split_collapse(const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point)
```


### move_point

```cpp
public void move_point(index_t vertex, const Point3D & point)
```


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
public CleanMappings clean()
```


 Clean up the mesh removing inactive tetrahedra, isolated vertices, edges and facets.

**return** old2new mappings for tetrahedra, vertices, edges and facets.

### TetrahedralSolidModifier

```cpp
public void TetrahedralSolidModifier(const VertexSet & solid, VertexSetBuilder & builder, MeshModifierFactoryKey key)
```


### solid

```cpp
protected const TetrahedralSolid3D & solid()
```


### builder

```cpp
protected TetrahedralSolidBuilder3D & builder()
```




