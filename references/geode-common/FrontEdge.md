# struct FrontEdge


## Members

public geode::index_t solid_edge_id

public array patch_vertices

public PolyhedronFacet hint_facet

public std::pair<geode::index_t, geode::index_t> hint_edge

public geode::index_t triangle_info_ptr



## Functions

### FrontEdge

```cpp
public void FrontEdge(array patch_vertices_in, PolyhedronFacet hint_facet_in, geode::index_t triangle_info_ptr_in)
```


### FrontEdge

```cpp
public void FrontEdge(geode::index_t solid_edge_in, array patch_vertices_in, geode::index_t triangle_info_ptr_in)
```




