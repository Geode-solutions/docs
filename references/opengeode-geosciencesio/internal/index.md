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
* [BlockAttributeTypes](BlockAttributeTypes.md)
* [CRSData](CRSData.md)
* [DEMInput](DEMInput.md)
* [ECurveData](ECurveData.md)
* [GEOTIFFInput](GEOTIFFInput.md)
* [GRDECLInput](GRDECLInput.md)
* [GeosBoundaryConditions](GeosBoundaryConditions.md)
* [GeosCellArray](GeosCellArray.md)
* [GeosCellProperty](GeosCellProperty.md)
* [GeosDeckContext](GeosDeckContext.md)
* [GeosExportData](GeosExportData.md)
* [GeosExporterImpl](GeosExporterImpl.md)
* [GeosImportedField](GeosImportedField.md)
* [GeosPorosityGroup](GeosPorosityGroup.md)
* [GeosRegionAssignment](GeosRegionAssignment.md)
* [GeosRegion](GeosRegion.md)
* [GeosRegions](GeosRegions.md)
* [GeosSimulationChecker](GeosSimulationChecker.md)
* [GeosSimulationWriter](GeosSimulationWriter.md)
* [GeosTableFunction](GeosTableFunction.md)
* [GocadVertexProperties](GocadVertexProperties.md)
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
* [SurfaceValueGroups](SurfaceValueGroups.md)
* [TSInput](TSInput.md)
* [TSOutput](TSOutput.md)
* [TSurfBorderData](TSurfBorderData.md)
* [TSurfData](TSurfData.md)
* [VOInput](VOInput.md)
* [VSInput](VSInput.md)
* [VSOutput](VSOutput.md)
* [VSetData](VSetData.md)
* [VariableSurface](VariableSurface.md)
* [WLInput](WLInput.md)
* [WellDatInput](WellDatInput.md)
* [WellDevInput](WellDevInput.md)
* [WellInputImpl](WellInputImpl.md)
* [WellTxtInput](WellTxtInput.md)


## Functions

### geos_real

```cpp
std::string geos_real(double value)
```


 Real value written with the fewest significant digits (at least 15) that read back to the same value

### geos_array

```cpp
std::string geos_array(absl::Span<const double> values)
```


 GEOS array of reals: "{ a, b, c }"

### clone_with_model_boundaries

```cpp
Model clone_with_model_boundaries(const Model & model)
```


### read_header

```cpp
HeaderData read_header(std::ifstream & file)
```


### determine_surface_to_regions_sides

```cpp
RegionSurfaceSide determine_surface_to_regions_sides(const BRep & brep)
```


### read_name

```cpp
std::string read_name(absl::Span<const std::string_view> tokens)
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

### is_valid_geos_list_item

```cpp
bool is_valid_geos_list_item(std::string_view name)
```


### geos_stress_factor

```cpp
double geos_stress_factor(const PhysicalProblem & problem)
```


### check_brep_polygons

```cpp
bool check_brep_polygons(const BRep & brep)
```


### set_attribute

```cpp
void set_attribute(pugi::xml_node & node, std::string_view attribute, std::string_view value)
```


### set_real_attribute

```cpp
void set_real_attribute(pugi::xml_node & node, std::string_view attribute, double value)
```


### transfer_stress_components

```cpp
void transfer_stress_components(const BRep & model, const ModelToMeshMappings & model2solid, const PhysicalProperties::Info & property_info, std::string_view name, local_index_t first_component, double factor, VariableAttribute<StressTensor> & tensor)
```


### add_comment

```cpp
void add_comment(pugi::xml_node & node, std::string_view comment)
```


### copy_typed_block_attribute

```cpp
bool copy_typed_block_attribute(const Model & model, absl::Span<const index_t> block_polyhedra_offsets, std::string_view attribute_type, std::string_view attribute_name, const uuid & attribute_id, AttributeManager & solid_manager)
```


### copy_block_attribute

```cpp
bool copy_block_attribute(const Model & model, absl::Span<const index_t> block_polyhedra_offsets, std::string_view attribute_type, std::string_view attribute_name, const uuid & attribute_id, AttributeManager & solid_manager, BlockAttributeTypes<Types...> )
```


### geos_solver_option_roles

```cpp
const absl::flat_hash_map<std::string, std::string> & geos_solver_option_roles()
```


 XPath of the generated nodes that "geos" solver options can modify

### geos_isothermal_temperature

```cpp
std::optional<double> geos_isothermal_temperature(const PhysicalProblem & problem)
```


 Temperature of an isothermal GEOS simulation: the one shared by every initial condition, if any

### surface_values

```cpp
std::optional<std::vector<T>> surface_values(const Surface3D & surface, const uuid & attribute_id)
```


### geos_default_boundary_temperature

```cpp
std::optional<double> geos_default_boundary_temperature(const PhysicalProblem & problem, const GeosBoundaryConditions & boundary_conditions)
```


 GEOS compositional solvers need a temperature on every boundary face set. Returns the temperature to impose when the model has none.

### geos_source_term_name

```cpp
std::string geos_source_term_name(const SourceTerm & source_term)
```


 Name of the GEOS SourceFlux of a source term

### unique_attribute_name

```cpp
std::string unique_attribute_name(const AttributeManager & manager, std::string_view attribute_name, std::string_view geos_name)
```


### read_elevation_raster

```cpp
void read_elevation_raster(std::string_view filename, absl::Span<const char *const> allowed_drivers, PolygonalSurface3D & surface)
```


 Fill a surface from the first band of a georeferenced raster: one vertex per pixel center with the pixel value as elevation (no data pixels are skipped) and one quad between four neighboring pixels.

### transfer_block_attribute

```cpp
std::optional<std::string> transfer_block_attribute(const BRep & model, SolidMesh3D & solid, absl::Span<const index_t> block_polyhedra_offsets, const PhysicalProperties::Info & property_info, std::string_view geos_name)
```


### assign_geos_materials

```cpp
GeosRegionAssignment assign_geos_materials(const PhysicalProblem & problem, const BRep & model, const GeosRegions & regions)
```


 Material of each solid region, with the materials GEOS cannot assign. Blocks covered by several materials or by none are not issues here: SimulationChecker reports them.

### geos_boundary_conditions

```cpp
GeosBoundaryConditions geos_boundary_conditions(const BRep & model)
```


### assign_geos_initial_conditions

```cpp
GeosRegionAssignment assign_geos_initial_conditions(const PhysicalProblem & problem, const BRep & model, const GeosRegions & regions)
```


 Initial condition of each solid region, assigned as materials are

### group_surface_values

```cpp
SurfaceValueGroups<T> group_surface_values(const BRep & model, const absl::flat_hash_map<uuid, index_t> & surface_regions, const uuid & attribute_id)
```


### axis_values

```cpp
std::vector<double> axis_values(absl::Span<const std::array<double, 3>> values, local_index_t axis)
```


### face_center

```cpp
Point3D face_center(const SurfaceMesh3D & mesh, index_t polygon_id)
```


### table_polygon_nodes

```cpp
std::vector<index_t> table_polygon_nodes(const TableCoordinates & coordinates, absl::Span<const Point3D> centers)
```


### table_node_polygons

```cpp
std::vector<index_t> table_node_polygons(const TableCoordinates & coordinates, absl::Span<const index_t> polygon_nodes, absl::Span<const Point3D> centers)
```


### mechanics_context_property

```cpp
std::optional<GeosCellProperty> & mechanics_context_property(GeosDeckContext & context, PHYSICAL_PROPERTY_NAME property)
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
bool read_properties(const PropHeaderData & properties_header, std::vector<std::vector<double>> & attribute_values, absl::Span<const std::string_view> tokens, geode::index_t line_properties_position)
```


 Reads the property values of a vertex line. Missing values are set to NO_DATA_VALUES and false is returned.

### create_attributes

```cpp
void create_attributes(const PropHeaderData & attributes_header, absl::Span<const std::vector<double>> attributes_values, geode::AttributeManager & attribute_manager, geode::index_t nb_vertices, absl::Span<const geode::index_t> inverse_vertex_mapping, geode::index_t vertex_offset)
```


### separating_table_coordinates

```cpp
std::optional<TableCoordinates> separating_table_coordinates(absl::Span<const Point3D> centers)
```


### write_prop_header

```cpp
void write_prop_header(std::ofstream & file, const PropHeaderData & data)
```


### write_property_class_header

```cpp
void write_property_class_header(std::ofstream & file, const PropClassHeaderData & data)
```


### write_table_values

```cpp
void write_table_values(const std::string & filename, absl::Span<const double> values)
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




## Enums

| enum class SOLVER_PHYSICS |

--

| flow |
| mechanics |
| poromechanics |





