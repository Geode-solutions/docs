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

# namespace internal



## Records

* [BRepFemOutput](BRepFemOutput.md)
* [CRSData](CRSData.md)
* [DEMInput](DEMInput.md)
* [ECurveData](ECurveData.md)
* [GEOTIFFInput](GEOTIFFInput.md)
* [GRDECLInput](GRDECLInput.md)
* [GeosExporterImpl](GeosExporterImpl.md)
* [HeaderData](HeaderData.md)
* [HorizonStackSKUAInput](HorizonStackSKUAInput.md)
* [LSOInput](LSOInput.md)
* [LSOOutput](LSOOutput.md)
* [MLInput](MLInput.md)
* [MLOutputBRep](MLOutputBRep.md)
* [MLOutputImpl](MLOutputImpl.md)
* [MLOutputStructuralModel](MLOutputStructuralModel.md)
* [PLInput](PLInput.md)
* [PLOutput](PLOutput.md)
* [PolyTIFFInput](PolyTIFFInput.md)
* [PropClassHeaderData](PropClassHeaderData.md)
* [PropHeaderData](PropHeaderData.md)
* [RegionSurfaceSide](RegionSurfaceSide.md)
* [SHPInput](SHPInput.md)
* [SolidFemOutput](SolidFemOutput.md)
* [TSInput](TSInput.md)
* [TSOutput](TSOutput.md)
* [TSurfBorderData](TSurfBorderData.md)
* [TSurfData](TSurfData.md)
* [VOInput](VOInput.md)
* [VSInput](VSInput.md)
* [VSOutput](VSOutput.md)
* [VSetData](VSetData.md)
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
basic_string read_name(absl::Span<const std::string_view> tokens)
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
PropHeaderData read_prop_header(std::ifstream & file, basic_string_view prefix)
```


### read_properties

```cpp
void read_properties(const PropHeaderData & properties_header, std::vector<std::vector<double> > & attribute_values, absl::Span<const std::string_view> tokens, geode::index_t line_properties_position)
```


### create_attributes

```cpp
void create_attributes(const PropHeaderData & attributes_header, Span attributes_values, geode::AttributeManager & attribute_manager, geode::index_t nb_vertices, Span inverse_vertex_mapping)
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
optional read_tsurf(std::ifstream & file)
```


### read_ecurve

```cpp
std::optional<ECurveData> read_ecurve(std::ifstream & file)
```


### read_vs_points

```cpp
optional read_vs_points(std::ifstream & file)
```


### determine_surface_to_regions_sides

```cpp
RegionSurfaceSide determine_surface_to_regions_sides(const BRep & brep)
```


### clone_with_model_boundaries

```cpp
Model clone_with_model_boundaries(const Model & model)
```


### check_brep_polygons

```cpp
bool check_brep_polygons(const BRep & brep)
```


### get_one_border_edge

```cpp
optional get_one_border_edge(const SurfaceMesh3D & mesh)
```


### read_coordinate_system

```cpp
CoordinateSystem read_coordinate_system(GDALDataset & dataset)
```




