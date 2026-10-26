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
* [GeosCellArray](GeosCellArray.md)
* [GeosDeckContext](GeosDeckContext.md)
* [GeosExporterImpl](GeosExporterImpl.md)
* [GeosImportedField](GeosImportedField.md)
* [GeosPorosityGroup](GeosPorosityGroup.md)
* [GeosRegionAssignment](GeosRegionAssignment.md)
* [GeosRegion](GeosRegion.md)
* [GeosSimulationWriter](GeosSimulationWriter.md)
* [GeosTableFunction](GeosTableFunction.md)
* [HeaderData](HeaderData.md)
* [HorizonStackSKUAInput](HorizonStackSKUAInput.md)
* [JSONGridInput](JSONGridInput.md)
* [LSOInput](LSOInput.md)
* [LSOOutput](LSOOutput.md)
* [MLInput](MLInput.md)
* [MLOutputBRep](MLOutputBRep.md)
* [MLOutputImpl](MLOutputImpl.md)
* [MLOutputStructuralModel](MLOutputStructuralModel.md)
* [OMFEdgedCurveInput](OMFEdgedCurveInput.md)
* [OMFFile](OMFFile.md)
* [OMFLightRegularGridInput](OMFLightRegularGridInput.md)
* [OMFPointSetInput](OMFPointSetInput.md)
* [OMFPolygonalSurfaceInput](OMFPolygonalSurfaceInput.md)
* [OMFTriangulatedSurfaceInput](OMFTriangulatedSurfaceInput.md)
* [PLInput](PLInput.md)
* [PLOutput](PLOutput.md)
* [PolyTIFFInput](PolyTIFFInput.md)
* [PropClassHeaderData](PropClassHeaderData.md)
* [PropHeaderData](PropHeaderData.md)
* [RegionSurfaceSide](RegionSurfaceSide.md)
* [SHPInput](SHPInput.md)
* [SolidFemOutput](SolidFemOutput.md)
* [StratigraphicLSOInput](StratigraphicLSOInput.md)
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

### clone_with_model_boundaries

```cpp
Model clone_with_model_boundaries(const Model & model)
```


### read_header

```cpp
HeaderData read_header(std::ifstream & file)
```


### geos_real

```cpp
std::string geos_real(double value)
```


 Real value written with 15 significant digits

### geos_array

```cpp
std::string geos_array(absl::Span<const double> values)
```


 GEOS array of reals: "{ a, b, c }"

### determine_surface_to_regions_sides

```cpp
RegionSurfaceSide determine_surface_to_regions_sides(const BRep & brep)
```


### write_header

```cpp
void write_header(std::ofstream & file, const HeaderData & data)
```


### geos_names

```cpp
std::string geos_names(absl::Span<const std::string> names)
```


 GEOS array of names: "{ a, b, c }"

### set_attribute

```cpp
void set_attribute(pugi::xml_node & node, std::string_view attribute, std::string_view value)
```


### check_brep_polygons

```cpp
bool check_brep_polygons(const BRep & brep)
```


### geos_solver_option_roles

```cpp
const absl::flat_hash_map<std::string, std::string> & geos_solver_option_roles()
```


 XPath of the generated nodes that "geos" solver options can modify

### set_real_attribute

```cpp
void set_real_attribute(pugi::xml_node & node, std::string_view attribute, double value)
```


### add_comment

```cpp
void add_comment(pugi::xml_node & node, std::string_view comment)
```


### get_one_border_edge

```cpp
std::optional<PolygonEdge> get_one_border_edge(const SurfaceMesh3D & mesh)
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
PropHeaderData read_prop_header(std::ifstream & file, std::string_view prefix)
```


### read_properties

```cpp
void read_properties(const PropHeaderData & properties_header, std::vector<std::vector<double>> & attribute_values, absl::Span<const std::string_view> tokens, geode::index_t line_properties_position)
```


### assign_geos_regions

```cpp
GeosRegionAssignment assign_geos_regions(const GeosDeckContext & context, absl::Span<const absl::Span<const uuid>> item_regions, std::string_view item_kind)
```


 Assigns items to regions: items with regions first, then the default item (no region) to the remaining regions.

### transfer_block_attribute

```cpp
std::string transfer_block_attribute(const Model & model, SolidMesh3D & solid, const ModelToMeshMappings & model2solid, const PhysicalProperties::Info & property_info)
```


### read_name

```cpp
std::string read_name(absl::Span<const std::string_view> tokens)
```


### geos_isothermal_temperature

```cpp
std::optional<double> geos_isothermal_temperature(const PhysicalProblem & problem)
```


 Temperature of an isothermal GEOS simulation: the one shared by every initial condition, if any

### geos_default_boundary_temperature

```cpp
std::optional<double> geos_default_boundary_temperature(const PhysicalProblem & problem, const GeosDeckContext & context)
```


 GEOS compositional solvers need a temperature on every boundary face set. Returns the temperature to impose when the model has none.

### geos_source_term_name

```cpp
std::string geos_source_term_name(const SourceTerm & source_term)
```


 Name of the GEOS SourceFlux of a source term

### assign_geos_materials

```cpp
GeosRegionAssignment assign_geos_materials(const PhysicalProblem & problem, const GeosDeckContext & context)
```


 Material of each solid region, with the assignment issues

### assign_geos_initial_conditions

```cpp
GeosRegionAssignment assign_geos_initial_conditions(const PhysicalProblem & problem, const GeosDeckContext & context)
```


 Initial condition of each solid region, with the assignment issues

### validate_geos_problem

```cpp
std::vector<std::string> validate_geos_problem(const PhysicalProblem & problem, absl::Span<const std::string> well_names)
```


 GEOS-specific checks of a problem that need no model data, only the names of the well perforations given to the exporter (simulator independent checks are done by validate_physical_problem). Returns one message per issue, empty if valid.

### create_attributes

```cpp
void create_attributes(const PropHeaderData & attributes_header, absl::Span<const std::vector<double>> attributes_values, geode::AttributeManager & attribute_manager, geode::index_t nb_vertices, absl::Span<const geode::index_t> inverse_vertex_mapping)
```


### validate_geos_deck

```cpp
std::vector<std::string> validate_geos_deck(const PhysicalProblem & problem, const GeosDeckContext & context)
```


 GEOS-specific checks of a problem against the model data of the deck (region assignments are checked by assign_geos_materials and assign_geos_initial_conditions). Returns one message per issue, empty if valid.

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
std::optional<TSurfData> read_tsurf(std::ifstream & file)
```


### read_ecurve

```cpp
std::optional<ECurveData> read_ecurve(std::ifstream & file)
```


### read_vs_points

```cpp
std::optional<VSetData> read_vs_points(std::ifstream & file)
```


### set_omf_element_attribute

```cpp
void set_omf_element_attribute(AttributeManager & manager, index_t element_id, index_t begin, index_t end)
```


 Set the mesh name and, when several OMF elements are merged into the same mesh, the omf_element attribute giving the element index



