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

# namespace geode



## Namespaces

* [detail](detail/index.md)


## Records

* [CrossSectionBuilder](CrossSectionBuilder.md)
* [CrossSectionInput](CrossSectionInput.md)
* [CrossSectionOutput](CrossSectionOutput.md)
* [CrossSection](CrossSection.md)
* [FaultBlock](FaultBlock.md)
* [FaultBlocksBuilder](FaultBlocksBuilder.md)
* [FaultBlocks](FaultBlocks.md)
* [Fault](Fault.md)
* [FaultsBuilder](FaultsBuilder.md)
* [Faults](Faults.md)
* [GeographicCoordinateSystem](GeographicCoordinateSystem.md)
* [GeosciencesExplicitLibrary](GeosciencesExplicitLibrary.md)
* [GeosciencesImplicitLibrary](GeosciencesImplicitLibrary.md)
* [Horizon](Horizon.md)
* [HorizonsBuilder](HorizonsBuilder.md)
* [HorizonsStackBuilder](HorizonsStackBuilder.md)
* [HorizonsStackInput](HorizonsStackInput.md)
* [HorizonsStackOutput](HorizonsStackOutput.md)
* [HorizonsStack](HorizonsStack.md)
* [Horizons](Horizons.md)
* [ImplicitCrossSectionBuilder](ImplicitCrossSectionBuilder.md)
* [ImplicitCrossSectionInput](ImplicitCrossSectionInput.md)
* [ImplicitCrossSectionOutput](ImplicitCrossSectionOutput.md)
* [ImplicitCrossSection](ImplicitCrossSection.md)
* [ImplicitStructuralModelBuilder](ImplicitStructuralModelBuilder.md)
* [ImplicitStructuralModelInput](ImplicitStructuralModelInput.md)
* [ImplicitStructuralModelOutput](ImplicitStructuralModelOutput.md)
* [ImplicitStructuralModel](ImplicitStructuralModel.md)
* [MeshElement](MeshElement.md)
* [OpenGeodeCrossSectionInput](OpenGeodeCrossSectionInput.md)
* [OpenGeodeCrossSectionOutput](OpenGeodeCrossSectionOutput.md)
* [OpenGeodeHorizonsStackInput](OpenGeodeHorizonsStackInput.md)
* [OpenGeodeHorizonsStackOutput](OpenGeodeHorizonsStackOutput.md)
* [OpenGeodeImplicitCrossSectionInput](OpenGeodeImplicitCrossSectionInput.md)
* [OpenGeodeImplicitCrossSectionOutput](OpenGeodeImplicitCrossSectionOutput.md)
* [OpenGeodeImplicitStructuralModelInput](OpenGeodeImplicitStructuralModelInput.md)
* [OpenGeodeImplicitStructuralModelOutput](OpenGeodeImplicitStructuralModelOutput.md)
* [OpenGeodeStructuralModelInput](OpenGeodeStructuralModelInput.md)
* [OpenGeodeStructuralModelOutput](OpenGeodeStructuralModelOutput.md)
* [StratigraphicModelBuilder](StratigraphicModelBuilder.md)
* [StratigraphicModelInput](StratigraphicModelInput.md)
* [StratigraphicModelOutput](StratigraphicModelOutput.md)
* [StratigraphicModel](StratigraphicModel.md)
* [StratigraphicPoint](StratigraphicPoint.md)
* [StratigraphicRelationshipsBuilder](StratigraphicRelationshipsBuilder.md)
* [StratigraphicRelationships](StratigraphicRelationships.md)
* [StratigraphicSectionBuilder](StratigraphicSectionBuilder.md)
* [StratigraphicSectionInput](StratigraphicSectionInput.md)
* [StratigraphicSectionOutput](StratigraphicSectionOutput.md)
* [StratigraphicSection](StratigraphicSection.md)
* [StratigraphicUnit](StratigraphicUnit.md)
* [StratigraphicUnitsBuilder](StratigraphicUnitsBuilder.md)
* [StratigraphicUnits](StratigraphicUnits.md)
* [StructuralModelBuilder](StructuralModelBuilder.md)
* [StructuralModelInput](StructuralModelInput.md)
* [StructuralModelOutput](StructuralModelOutput.md)
* [StructuralModel](StructuralModel.md)
* [uuid](uuid.md)


## Functions

### save_stratigraphic_model

```cpp
vector save_stratigraphic_model(const StratigraphicModel & stratigraphic_model, basic_string_view filename)
```


 API function for saving a StratigraphicModel. The adequate saver is called depending on the given filename extension.

**stratigraphic_model** [in] StratigraphicModel to save.

**filename** [in] Path to the file where save the StratigraphicModel.

### is_stratigraphic_model_saveable

```cpp
bool is_stratigraphic_model_saveable(const StratigraphicModel & stratigraphic_model, basic_string_view filename)
```


### save_structural_model

```cpp
vector save_structural_model(const StructuralModel & structural_model, basic_string_view filename)
```


 API function for saving a StructuralModel. The adequate saver is called depending on the given filename extension.

**structural_model** [in] StructuralModel to save.

**filename** [in] Path to the file where save the StructuralModel.

### is_structural_model_saveable

```cpp
bool is_structural_model_saveable(const StructuralModel & structural_model, basic_string_view filename)
```


### save_implicit_structural_model

```cpp
vector save_implicit_structural_model(const ImplicitStructuralModel & implicit_model, basic_string_view filename)
```


 API function for saving an ImplicitStructuralModel. The adequate saver is called depending on the given filename extension.

**implicit_model** [in] ImplicitStructuralModel to save.

**filename** [in] Path to the file where save the ImplicitStructuralModel.

### is_implicit_structural_model_saveable

```cpp
bool is_implicit_structural_model_saveable(const ImplicitStructuralModel & implicit_model, basic_string_view filename)
```


### load_stratigraphic_section

```cpp
StratigraphicSection load_stratigraphic_section(basic_string_view filename)
```


 API function for loading a StratigraphicSection. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### stratigraphic_section_additional_files

```cpp
AdditionalFiles stratigraphic_section_additional_files(basic_string_view filename)
```


### is_stratigraphic_section_loadable

```cpp
bool is_stratigraphic_section_loadable(basic_string_view filename)
```


### load_cross_section

```cpp
CrossSection load_cross_section(basic_string_view filename)
```


 API function for loading a CrossSection. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### cross_section_additional_files

```cpp
class CrossSectionInput::AdditionalFiles cross_section_additional_files(basic_string_view filename)
```


### is_cross_section_loadable

```cpp
bool is_cross_section_loadable(basic_string_view filename)
```


### load_implicit_cross_section

```cpp
ImplicitCrossSection load_implicit_cross_section(basic_string_view filename)
```


 API function for loading an ImplicitCrossSection. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### implicit_cross_section_additional_files

```cpp
class ImplicitCrossSectionInput::AdditionalFiles implicit_cross_section_additional_files(basic_string_view filename)
```


### is_implicit_cross_section_loadable

```cpp
bool is_implicit_cross_section_loadable(basic_string_view filename)
```


### save_stratigraphic_section

```cpp
vector save_stratigraphic_section(const StratigraphicSection & stratigraphic_section, basic_string_view filename)
```


 API function for saving a StratigraphicSection. The adequate saver is called depending on the given filename extension.

**stratigraphic_section** [in] StratigraphicSection to save.

**filename** [in] Path to the file where save the StratigraphicSection.

### is_stratigraphic_section_saveable

```cpp
bool is_stratigraphic_section_saveable(const StratigraphicSection & stratigraphic_section, basic_string_view filename)
```


### save_cross_section

```cpp
vector save_cross_section(const CrossSection & cross_section, basic_string_view filename)
```


 API function for saving a CrossSection. The adequate saver is called depending on the given filename extension.

**cross_section** [in] CrossSection to save.

**filename** [in] Path to the file where save the CrossSection.

### is_cross_section_saveable

```cpp
bool is_cross_section_saveable(const CrossSection & cross_section, basic_string_view filename)
```


### save_implicit_cross_section

```cpp
vector save_implicit_cross_section(const ImplicitCrossSection & implicit_model, basic_string_view filename)
```


 API function for saving an ImplicitCrossSection. The adequate saver is called depending on the given filename extension.

**implicit_model** [in] ImplicitCrossSection to save.

**filename** [in] Path to the file where save the ImplicitCrossSection.

### is_implicit_cross_section_saveable

```cpp
bool is_implicit_cross_section_saveable(const ImplicitCrossSection & section, basic_string_view filename)
```


### load_horizons_stack

```cpp
HorizonsStack<dimension> load_horizons_stack(basic_string_view filename)
```


 API function for loading a HorizonsStack. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

**return** Loaded HorizonsStack.

### horizons_stack_additional_files

```cpp
typename HorizonsStackInput<dimension>::AdditionalFiles horizons_stack_additional_files(basic_string_view filename)
```


### is_horizons_stack_loadable

```cpp
bool is_horizons_stack_loadable(basic_string_view filename)
```


### save_horizons_stack

```cpp
vector save_horizons_stack(const HorizonsStack<dimension> & horizons_stack, basic_string_view filename)
```


 API function for saving a HorizonsStack. The adequate saver is called depending on the given filename extension.

**horizons_stack** [in] HorizonsStack to save.

**filename** [in] Path to the file where save the brep.

### is_horizons_stack_saveable

```cpp
bool is_horizons_stack_saveable(const HorizonsStack<dimension> & horizons_stack, basic_string_view filename)
```


### register_explicit_serialize_pcontext

```cpp
void register_explicit_serialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to serialize the objects in the explicit library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### register_explicit_deserialize_pcontext

```cpp
void register_explicit_deserialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to deserialize the objects in the explicit library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### load_structural_model

```cpp
StructuralModel load_structural_model(basic_string_view filename)
```


 API function for loading a StructuralModel. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### structural_model_additional_files

```cpp
AdditionalFiles structural_model_additional_files(basic_string_view filename)
```


### is_structural_model_loadable

```cpp
bool is_structural_model_loadable(basic_string_view filename)
```


### assign_edged_curve_geographic_coordinate_system_info

```cpp
void assign_edged_curve_geographic_coordinate_system_info(const EdgedCurve<dimension> & mesh, EdgedCurveBuilder<dimension> & builder, basic_string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```


### assign_point_set_geographic_coordinate_system_info

```cpp
void assign_point_set_geographic_coordinate_system_info(const PointSet<dimension> & mesh, PointSetBuilder<dimension> & builder, basic_string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```


### assign_solid_mesh_geographic_coordinate_system_info

```cpp
void assign_solid_mesh_geographic_coordinate_system_info(const SolidMesh<dimension> & mesh, SolidMeshBuilder<dimension> & builder, basic_string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```


### assign_surface_mesh_geographic_coordinate_system_info

```cpp
void assign_surface_mesh_geographic_coordinate_system_info(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder, basic_string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```


### assign_brep_geographic_coordinate_system_info

```cpp
void assign_brep_geographic_coordinate_system_info(const BRep & brep, BRepBuilder & builder, basic_string_view crs_name, const GeographicCoordinateSystem3D::Info & info)
```


### assign_section_geographic_coordinate_system_info

```cpp
void assign_section_geographic_coordinate_system_info(const Section & section, SectionBuilder & builder, basic_string_view crs_name, const GeographicCoordinateSystem2D::Info & info)
```


### convert_edged_curve_coordinate_reference_system

```cpp
void convert_edged_curve_coordinate_reference_system(const EdgedCurve<dimension> & mesh, EdgedCurveBuilder<dimension> & builder, basic_string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```


### convert_point_set_coordinate_reference_system

```cpp
void convert_point_set_coordinate_reference_system(const PointSet<dimension> & mesh, PointSetBuilder<dimension> & builder, basic_string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```


### convert_solid_mesh_coordinate_reference_system

```cpp
void convert_solid_mesh_coordinate_reference_system(const SolidMesh<dimension> & mesh, SolidMeshBuilder<dimension> & builder, basic_string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```


### convert_surface_mesh_coordinate_reference_system

```cpp
void convert_surface_mesh_coordinate_reference_system(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder, basic_string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```


### convert_brep_coordinate_reference_system

```cpp
void convert_brep_coordinate_reference_system(const BRep & brep, BRepBuilder & builder, basic_string_view crs_name, const GeographicCoordinateSystem3D::Info & info)
```


### convert_section_coordinate_reference_system

```cpp
void convert_section_coordinate_reference_system(const Section & section, SectionBuilder & builder, basic_string_view crs_name, const GeographicCoordinateSystem2D::Info & info)
```


### load_implicit_structural_model

```cpp
ImplicitStructuralModel load_implicit_structural_model(basic_string_view filename)
```


 API function for loading an ImplicitStructuralModel. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### implicit_structural_model_additional_files

```cpp
AdditionalFiles implicit_structural_model_additional_files(basic_string_view filename)
```


### is_implicit_structural_model_loadable

```cpp
bool is_implicit_structural_model_loadable(basic_string_view filename)
```


### load_stratigraphic_model

```cpp
StratigraphicModel load_stratigraphic_model(basic_string_view filename)
```


 API function for loading a StratigraphicModel. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### stratigraphic_model_additional_files

```cpp
AdditionalFiles stratigraphic_model_additional_files(basic_string_view filename)
```


### is_stratigraphic_model_loadable

```cpp
bool is_stratigraphic_model_loadable(basic_string_view filename)
```


### build_structural_model_fault_blocks

```cpp
void build_structural_model_fault_blocks(StructuralModel & structural_model)
```




