# class MLOutputImpl


## Functions

### ~MLOutputImpl

```cpp
public void ~MLOutputImpl<Model>()
```


### write_file

```cpp
public void write_file()
```


### MLOutputImpl

```cpp
protected void MLOutputImpl<Model>(string_view filename, const Model & model)
```


### component_id

```cpp
protected index_t & component_id()
```


### components

```cpp
protected int & components()
```


### file

```cpp
protected std::ofstream & file()
```


### write_key_triangle

```cpp
protected void write_key_triangle(const Component & component)
```


### write_geological_tsurfs

```cpp
protected void write_geological_tsurfs()
```

### unclassified_tsurfs

```cpp
protected int unclassified_tsurfs()
```

### write_tsurfs

```cpp
protected void write_tsurfs()
```


### write_geological_tfaces

```cpp
protected void write_geological_tfaces()
```

### write_tfaces

```cpp
protected void write_tfaces()
```


### write_universe

```cpp
protected void write_universe()
```


### write_regions

```cpp
protected void write_regions()
```


### write_geological_regions

```cpp
protected void write_geological_regions()
```

### write_model_components

```cpp
protected void write_model_components()
```


### write_surface

```cpp
protected index_t write_surface(const Surface3D & surface, const index_t current_offset)
```


### process_surface_edge

```cpp
protected void process_surface_edge(const Surface3D & surface, const PolygonEdge & edge, const index_t current_offset, int & line_starts)
```


### add_corners_and_line_starts

```cpp
protected void add_corners_and_line_starts(const Surface3D & surface, const index_t current_offset, int & line_starts)
```


### find_boundary_corners_and_line_starts

```cpp
protected void find_boundary_corners_and_line_starts(const ModelBoundary3D & surface_collection, int & line_starts)
```


### find_corners_and_line_starts

```cpp
protected void find_corners_and_line_starts(const ItemRange & item_range, int & line_starts)
```


### find_corners_and_line_starts_for_unclassified_surface

```cpp
protected int find_corners_and_line_starts_for_unclassified_surface(const uuid & surface_id)
```


### write_corners

```cpp
protected void write_corners(absl::Span<const std::array<index_t, 2> > line_starts)
```


### write_line_starts

```cpp
protected void write_line_starts(index_t current_offset, absl::Span<const std::array<index_t, 2> > line_starts)
```


### write_geological_model_surfaces

```cpp
protected void write_geological_model_surfaces()
```

### write_model_surfaces

```cpp
protected void write_model_surfaces()
```


### component_name

```cpp
protected basic_string component_name(const Component & component)
```




