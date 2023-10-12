# class MLOutputImpl

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#94
```

## Functions

### ~MLOutputImpl

```cpp
public void ~MLOutputImpl<Model>()
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#101
```

### write_file

```cpp
public void write_file()
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#103
```

### MLOutputImpl

```cpp
protected void MLOutputImpl<Model>(string_view filename, const Model & model)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#115
```

### component_id

```cpp
protected index_t & component_id()
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#124
```

### components

```cpp
protected int & components()
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#129
```

### file

```cpp
protected std::ofstream & file()
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#134
```

### write_key_triangle

```cpp
protected void write_key_triangle(const Component & component)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#140
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

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#156
```

### write_geological_tfaces

```cpp
protected void write_geological_tfaces()
```

### write_tfaces

```cpp
protected void write_tfaces()
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#174
```

### write_universe

```cpp
protected void write_universe()
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#207
```

### write_regions

```cpp
protected void write_regions()
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#235
```

### write_geological_regions

```cpp
protected void write_geological_regions()
```

### write_model_components

```cpp
protected void write_model_components()
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#283
```

### write_surface

```cpp
protected index_t write_surface(const Surface3D & surface, const index_t current_offset)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#291
```

### process_surface_edge

```cpp
protected void process_surface_edge(const Surface3D & surface, const PolygonEdge & edge, const index_t current_offset, int & line_starts)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#313
```

### add_corners_and_line_starts

```cpp
protected void add_corners_and_line_starts(const Surface3D & surface, const index_t current_offset, int & line_starts)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#334
```

### find_boundary_corners_and_line_starts

```cpp
protected void find_boundary_corners_and_line_starts(const ModelBoundary3D & surface_collection, int & line_starts)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#357
```

### find_corners_and_line_starts

```cpp
protected void find_corners_and_line_starts(const ItemRange & item_range, int & line_starts)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#372
```

### find_corners_and_line_starts_for_unclassified_surface

```cpp
protected int find_corners_and_line_starts_for_unclassified_surface(const uuid & surface_id)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#384
```

### write_corners

```cpp
protected void write_corners(absl::Span<const std::array<index_t, 2> > line_starts)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#395
```

### write_line_starts

```cpp
protected void write_line_starts(index_t current_offset, absl::Span<const std::array<index_t, 2> > line_starts)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#404
```

### write_geological_model_surfaces

```cpp
protected void write_geological_model_surfaces()
```

### write_model_surfaces

```cpp
protected void write_model_surfaces()
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#416
```

### component_name

```cpp
protected basic_string component_name(const Component & component)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#468
```



