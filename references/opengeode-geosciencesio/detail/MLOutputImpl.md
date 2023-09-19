# class MLOutputImpl


## Functions

### ~MLOutputImpl

```cpp
```cpp
public void ~MLOutputImpl<Model>()
```
```


### write_file

```cpp
```cpp
public void write_file()
```
```


### MLOutputImpl

```cpp
```cpp
protected void MLOutputImpl<Model>(string_view filename, const Model & model)
```
```


### component_id

```cpp
```cpp
protected index_t & component_id()
```
```


### components

```cpp
```cpp
protected int & components()
```
```


### file

```cpp
```cpp
protected std::ofstream & file()
```
```


### write_key_triangle

```cpp
```cpp
protected void write_key_triangle(const Component & component)
```
```


### write_geological_tsurfs

```cpp
```cpp
protected void write_geological_tsurfs()
```
```

### unclassified_tsurfs

```cpp
```cpp
protected int unclassified_tsurfs()
```
```

### write_tsurfs

```cpp
```cpp
protected void write_tsurfs()
```
```


### write_geological_tfaces

```cpp
```cpp
protected void write_geological_tfaces()
```
```

### write_tfaces

```cpp
```cpp
protected void write_tfaces()
```
```


### write_universe

```cpp
```cpp
protected void write_universe()
```
```


### write_regions

```cpp
```cpp
protected void write_regions()
```
```


### write_geological_regions

```cpp
```cpp
protected void write_geological_regions()
```
```

### write_model_components

```cpp
```cpp
protected void write_model_components()
```
```


### write_surface

```cpp
```cpp
protected index_t write_surface(const Surface3D & surface, const index_t current_offset)
```
```


### process_surface_edge

```cpp
```cpp
protected void process_surface_edge(const Surface3D & surface, const PolygonEdge & edge, const index_t current_offset, int & line_starts)
```
```


### add_corners_and_line_starts

```cpp
```cpp
protected void add_corners_and_line_starts(const Surface3D & surface, const index_t current_offset, int & line_starts)
```
```


### find_boundary_corners_and_line_starts

```cpp
```cpp
protected void find_boundary_corners_and_line_starts(const ModelBoundary3D & surface_collection, int & line_starts)
```
```


### find_corners_and_line_starts

```cpp
```cpp
protected void find_corners_and_line_starts(const ItemRange & item_range, int & line_starts)
```
```


### find_corners_and_line_starts_for_unclassified_surface

```cpp
```cpp
protected int find_corners_and_line_starts_for_unclassified_surface(const uuid & surface_id)
```
```


### write_corners

```cpp
```cpp
protected void write_corners(absl::Span<const std::array<index_t, 2> > line_starts)
```
```


### write_line_starts

```cpp
```cpp
protected void write_line_starts(index_t current_offset, absl::Span<const std::array<index_t, 2> > line_starts)
```
```


### write_geological_model_surfaces

```cpp
```cpp
protected void write_geological_model_surfaces()
```
```

### write_model_surfaces

```cpp
```cpp
protected void write_model_surfaces()
```
```


### component_name

```cpp
```cpp
protected basic_string component_name(const Component & component)
```
```




