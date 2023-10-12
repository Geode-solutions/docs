# namespace detail



## Records

* [CRSData](CRSData.md)
* [GRDECLInput](GRDECLInput.md)
* [HeaderData](HeaderData.md)
* [HorizonStackSKUAInput](HorizonStackSKUAInput.md)
* [LSOInput](LSOInput.md)
* [LSOOutput](LSOOutput.md)
* [MLInput](MLInput.md)
* [MLOutputBRep](MLOutputBRep.md)
* [MLOutputImpl](MLOutputImpl.md)
* [MLOutputStructuralModel](MLOutputStructuralModel.md)
* [PLOutput](PLOutput.md)
* [PropClassHeaderData](PropClassHeaderData.md)
* [PropHeaderData](PropHeaderData.md)
* [RegionSurfaceSide](RegionSurfaceSide.md)
* [SHPInput](SHPInput.md)
* [TSInput](TSInput.md)
* [TSOutput](TSOutput.md)
* [TSurfBorderData](TSurfBorderData.md)
* [TSurfData](TSurfData.md)
* [VOInput](VOInput.md)
* [WLInput](WLInput.md)
* [WellDatInput](WellDatInput.md)
* [WellDevInput](WellDevInput.md)
* [WellInputImpl](WellInputImpl.md)
* [WellTxtInput](WellTxtInput.md)


## Functions

### read_header

```cpp
HeaderData read_header(std::ifstream & file)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#205
```

### read_name

```cpp
basic_string read_name(absl::Span<const absl::string_view> tokens)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#468
```

### write_header

```cpp
void write_header(std::ofstream & file, const HeaderData & data)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#229
```

### read_CRS

```cpp
CRSData read_CRS(std::ifstream & file)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#236
```

### write_CRS

```cpp
void write_CRS(std::ofstream & file, const CRSData & data)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#262
```

### read_prop_header

```cpp
PropHeaderData read_prop_header(std::ifstream & file, string_view prefix)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#275
```

### read_properties

```cpp
void read_properties(const PropHeaderData & properties_header, int & attribute_values, absl::Span<const absl::string_view> tokens, geode::index_t line_properties_position)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#323
```

### create_attributes

```cpp
void create_attributes(const PropHeaderData & attributes_header, int attributes_values, geode::AttributeManager & attribute_manager, geode::index_t nb_vertices, absl::Span<const geode::index_t> inverse_vertex_mapping)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#347
```

### write_prop_header

```cpp
void write_prop_header(std::ofstream & file, const PropHeaderData & data)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#401
```

### write_property_class_header

```cpp
void write_property_class_header(std::ofstream & file, const PropClassHeaderData & data)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#454
```

### read_tsurf

```cpp
absl::optional<TSurfData> read_tsurf(std::ifstream & file)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/mesh/gocad_common.cpp#475
```

### determine_surface_to_regions_sides

```cpp
RegionSurfaceSide determine_surface_to_regions_sides(const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/geosciences_io/model/gocad_common.cpp#251
```

### clone_with_model_boundaries

```cpp
Model clone_with_model_boundaries(const Model & model)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#52
```

### check_brep_polygons

```cpp
bool check_brep_polygons(const BRep & brep)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#61
```

### get_one_border_edge

```cpp
absl::optional<PolygonEdge> get_one_border_edge(const SurfaceMesh3D & mesh)
```

```cpp
Defined at ../include/geode/geosciences_io/model/private/ml_output_impl.h#77
```



