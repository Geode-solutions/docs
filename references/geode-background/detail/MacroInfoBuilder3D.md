# class MacroInfoBuilder3D

```cpp
Defined at ../include/geode/background/solid/private/macro_info_builder.h#28
```

```cpp
Inherits from MacroInfoBuilder<3>
```



## Functions

### ~MacroInfoBuilder3D

```cpp
public void ~MacroInfoBuilder3D()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#356
```

### add_macro_edge_info

```cpp
public void add_macro_edge_info(const uuid & component_uuid, index_t macro_edge_id, Span background_solid_edge_ids)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#360
```

### add_macro_edge_info_on_vertex

```cpp
public void add_macro_edge_info_on_vertex(const uuid & component_uuid, index_t macro_edge_id, index_t background_solid_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#369
```

### remove_macro_edge_info_on_edge

```cpp
public void remove_macro_edge_info_on_edge(const uuid & component_uuid, index_t macro_edge_id, index_t background_solid_edge_id)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#378
```

### remove_macro_edge_info_on_vertex

```cpp
public void remove_macro_edge_info_on_vertex(const uuid & component_uuid, index_t macro_edge_id, index_t background_solid_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#387
```

### add_macro_facet_info

```cpp
public void add_macro_facet_info(const uuid & surface_uuid, geode::index_t macro_polygon_id, Span background_solid_facets_id)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#396
```

### add_macro_facet_info_on_vertex

```cpp
public void add_macro_facet_info_on_vertex(const uuid & component_uuid, index_t macro_facet_id, index_t background_solid_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#405
```

### initialize_block_info_database

```cpp
public void initialize_block_info_database()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#414
```

### add_block_to_background_tetrahedron

```cpp
public void add_block_to_background_tetrahedron(const uuid & block_id, index_t tetrahedron_id)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#424
```

### reset_all_blocks_of_background_tetrahedra

```cpp
public void reset_all_blocks_of_background_tetrahedra()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#419
```

### update_information

```cpp
public void update_information(const class TetrahedralSolidModifier::SolidSplitInfo & split_info)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#431
```

### update_information

```cpp
public void update_information(const class TetrahedralSolidModifier::SolidSplitEdgeInfo & split_info)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#437
```

### update_information

```cpp
public void update_information(const class TetrahedralSolidModifier::SolidCollapseEdgeInfo & collapse_info)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#443
```

### update_vertex

```cpp
public void update_vertex(const VertexMultiMapping & mapping)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#450
```

### update_vertices

```cpp
public void update_vertices(absl::Span<const VertexMultiMapping> mappings)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#456
```

### update_edge

```cpp
public void update_edge(const EdgeMapping & mapping)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#462
```

### update_edges

```cpp
public void update_edges(absl::Span<const EdgeMapping> mappings)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#467
```

### update_edge

```cpp
public void update_edge(const EdgeMultiMapping & mapping)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#473
```

### update_edges

```cpp
public void update_edges(absl::Span<const EdgeMultiMapping> mappings)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#478
```

### update_facet

```cpp
public void update_facet(const FacetMultiMapping & mapping)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#495
```

### update_facets

```cpp
public void update_facets(absl::Span<const FacetMultiMapping> mappings)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#500
```

### update_facet

```cpp
public void update_facet(const FacetMapping & mapping)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#484
```

### update_facets

```cpp
public void update_facets(absl::Span<const FacetMapping> mappings)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#489
```

### update_tetrahedron

```cpp
public void update_tetrahedron(const TetrahedronMapping & tetrahedron)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#506
```

### update_tetrahedra

```cpp
public void update_tetrahedra(absl::Span<const TetrahedronMapping> tetrahedra)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#512
```

### MacroInfoBuilder3D

```cpp
protected void MacroInfoBuilder3D(BackgroundSolid & background)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/macro_info_builder.cpp#351
```



