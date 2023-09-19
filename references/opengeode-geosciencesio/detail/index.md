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


### read_name

```cpp
basic_string read_name(absl::Span<const absl::string_view> tokens)
```


### write_header

```cpp
void write_header(std::ofstream & file, const HeaderData & data)
```


### read_CRS

```cpp
CRSData read_CRS(std::ifstream & file)
```


### write_CRS

```cpp
void write_CRS(std::ofstream & file, const CRSData & data)
```


### read_prop_header

```cpp
PropHeaderData read_prop_header(std::ifstream & file, string_view prefix)
```


### read_properties

```cpp
void read_properties(const PropHeaderData & properties_header, int & attribute_values, absl::Span<const absl::string_view> tokens, geode::index_t line_properties_position)
```


### create_attributes

```cpp
void create_attributes(const PropHeaderData & attributes_header, int attributes_values, geode::AttributeManager & attribute_manager, geode::index_t nb_vertices, absl::Span<const geode::index_t> inverse_vertex_mapping)
```


### write_prop_header

```cpp
void write_prop_header(std::ofstream & file, const PropHeaderData & data)
```


### write_property_class_header

```cpp
void write_property_class_header(std::ofstream & file, const PropClassHeaderData & data)
```


### read_tsurf

```cpp
absl::optional<TSurfData> read_tsurf(std::ifstream & file)
```


### determine_surface_to_regions_sides

```cpp
RegionSurfaceSide determine_surface_to_regions_sides(const BRep & brep)
```


### check_brep_polygons

```cpp
_Bool check_brep_polygons(const BRep & brep)
```


### get_one_border_edge

```cpp
absl::optional<PolygonEdge> get_one_border_edge(const SurfaceMesh3D & mesh)
```




