# class MacroInfoBuilder2D


```cpp
```cpp
Inherits from MacroInfoBuilder<2>
```
```



## Functions

### ~MacroInfoBuilder2D

```cpp
```cpp
public void ~MacroInfoBuilder2D()
```
```


### add_macro_edge_info

```cpp
```cpp
public void add_macro_edge_info(const uuid & component_uuid, index_t macro_edge_id, absl::Span<const index_t> background_surface_edge_ids)
```
```


### add_macro_edge_info_on_vertex

```cpp
```cpp
public void add_macro_edge_info_on_vertex(const uuid & component_uuid, index_t macro_edge_id, index_t background_surface_vertex_id)
```
```


### remove_macro_edge_info_on_edge

```cpp
```cpp
public void remove_macro_edge_info_on_edge(const uuid & component_uuid, index_t macro_edge_id, index_t background_surface_edge_id)
```
```


### remove_macro_edge_info_on_vertex

```cpp
```cpp
public void remove_macro_edge_info_on_vertex(const uuid & component_uuid, index_t macro_edge_id, index_t background_surface_vertex_id)
```
```


### update_information

```cpp
```cpp
public void update_information(const int & split_info)
```
```

### update_edges

```cpp
```cpp
public void update_edges(absl::Span<const EdgeMapping> edges)
```
```


### update_edges

```cpp
```cpp
public void update_edges(absl::Span<const EdgeMultiMapping> edges)
```
```


### MacroInfoBuilder2D

```cpp
```cpp
protected void MacroInfoBuilder2D(BackgroundSurface & background)
```
```


### update_information

```cpp
```cpp
public void update_information(const TriangulatedSurfaceModifier2D::SplitTriangleInfo & split_info)
```
```


### update_information

```cpp
```cpp
public void update_information(const TriangulatedSurfaceModifier2D::SplitPolygonEdgeInfo & split_info)
```
```


### update_information

```cpp
```cpp
public void update_information(const TriangulatedSurfaceModifier2D::CollapseEdgeInfo & collapse_info)
```
```




