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
* [internal](internal/index.md)


## Records

* [BrooksCoreyCapillaryPressure](BrooksCoreyCapillaryPressure.md)
* [BrooksCoreyRelativePermeability](BrooksCoreyRelativePermeability.md)
* [CapillaryPressure](CapillaryPressure.md)
* [Co2BrineFluid](Co2BrineFluid.md)
* [CrossSectionBuilder](CrossSectionBuilder.md)
* [CrossSectionInput](CrossSectionInput.md)
* [CrossSectionOutput](CrossSectionOutput.md)
* [CrossSection](CrossSection.md)
* [DeadOilFluid](DeadOilFluid.md)
* [FaultBlock](FaultBlock.md)
* [FaultBlocksBuilder](FaultBlocksBuilder.md)
* [FaultBlocks](FaultBlocks.md)
* [Fault](Fault.md)
* [FaultsBuilder](FaultsBuilder.md)
* [Faults](Faults.md)
* [FlowModel](FlowModel.md)
* [FluidComponent](FluidComponent.md)
* [FluidModel](FluidModel.md)
* [FluidThermalProperties](FluidThermalProperties.md)
* [GeographicCoordinateSystemInfo](GeographicCoordinateSystemInfo.md)
* [GeographicCoordinateSystem](GeographicCoordinateSystem.md)
* [Horizon](Horizon.md)
* [HorizonsBuilder](HorizonsBuilder.md)
* [HorizonsStackBuilder](HorizonsStackBuilder.md)
* [HorizonsStackInput](HorizonsStackInput.md)
* [HorizonsStackOutput](HorizonsStackOutput.md)
* [HorizonsStack](HorizonsStack.md)
* [Horizons](Horizons.md)
* [HydrocarbonPvtTable](HydrocarbonPvtTable.md)
* [ImplicitCrossSectionBuilder](ImplicitCrossSectionBuilder.md)
* [ImplicitCrossSectionInput](ImplicitCrossSectionInput.md)
* [ImplicitCrossSectionOutput](ImplicitCrossSectionOutput.md)
* [ImplicitCrossSection](ImplicitCrossSection.md)
* [ImplicitStructuralModelBuilder](ImplicitStructuralModelBuilder.md)
* [ImplicitStructuralModelInput](ImplicitStructuralModelInput.md)
* [ImplicitStructuralModelOutput](ImplicitStructuralModelOutput.md)
* [ImplicitStructuralModel](ImplicitStructuralModel.md)
* [InitialCondition](InitialCondition.md)
* [Material](Material.md)
* [MeshElement](MeshElement.md)
* [MultiphaseFlow](MultiphaseFlow.md)
* [OpenGeodeCrossSectionInput](OpenGeodeCrossSectionInput.md)
* [OpenGeodeCrossSectionOutput](OpenGeodeCrossSectionOutput.md)
* [OpenGeodeGeosciencesException](OpenGeodeGeosciencesException.md)
* [OpenGeodeGeosciencesExplicitException](OpenGeodeGeosciencesExplicitException.md)
* [OpenGeodeGeosciencesExplicitLibrary](OpenGeodeGeosciencesExplicitLibrary.md)
* [OpenGeodeGeosciencesImplicitException](OpenGeodeGeosciencesImplicitException.md)
* [OpenGeodeGeosciencesImplicitLibrary](OpenGeodeGeosciencesImplicitLibrary.md)
* [OpenGeodeGeosciencesSimulationException](OpenGeodeGeosciencesSimulationException.md)
* [OpenGeodeGeosciencesSimulationLibrary](OpenGeodeGeosciencesSimulationLibrary.md)
* [OpenGeodeHorizonsStackInput](OpenGeodeHorizonsStackInput.md)
* [OpenGeodeHorizonsStackOutput](OpenGeodeHorizonsStackOutput.md)
* [OpenGeodeImplicitCrossSectionInput](OpenGeodeImplicitCrossSectionInput.md)
* [OpenGeodeImplicitCrossSectionOutput](OpenGeodeImplicitCrossSectionOutput.md)
* [OpenGeodeImplicitStructuralModelInput](OpenGeodeImplicitStructuralModelInput.md)
* [OpenGeodeImplicitStructuralModelOutput](OpenGeodeImplicitStructuralModelOutput.md)
* [OpenGeodePhysicalProblemInput](OpenGeodePhysicalProblemInput.md)
* [OpenGeodePhysicalProblemOutput](OpenGeodePhysicalProblemOutput.md)
* [OpenGeodeStructuralModelInput](OpenGeodeStructuralModelInput.md)
* [OpenGeodeStructuralModelOutput](OpenGeodeStructuralModelOutput.md)
* [OutputSettings](OutputSettings.md)
* [PhysicalProblemBuilder](PhysicalProblemBuilder.md)
* [PhysicalProblemInput](PhysicalProblemInput.md)
* [PhysicalProblemOutput](PhysicalProblemOutput.md)
* [PhysicalProblem](PhysicalProblem.md)
* [RelativePermeability](RelativePermeability.md)
* [RockThermalProperties](RockThermalProperties.md)
* [SaturationTable](SaturationTable.md)
* [Schedule](Schedule.md)
* [SinglePhaseFlow](SinglePhaseFlow.md)
* [SinglePhaseFluid](SinglePhaseFluid.md)
* [SolverOptions](SolverOptions.md)
* [SourceTerm](SourceTerm.md)
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
* [StratigraphicUnitToBlockResult](StratigraphicUnitToBlockResult.md)
* [StratigraphicUnit](StratigraphicUnit.md)
* [StratigraphicUnitsBuilder](StratigraphicUnitsBuilder.md)
* [StratigraphicUnits](StratigraphicUnits.md)
* [StructuralModelBuilder](StructuralModelBuilder.md)
* [StructuralModelInput](StructuralModelInput.md)
* [StructuralModelOutput](StructuralModelOutput.md)
* [StructuralModel](StructuralModel.md)
* [TableCapillaryPressure](TableCapillaryPressure.md)
* [TableRelativePermeability](TableRelativePermeability.md)
* [ThermalParameters](ThermalParameters.md)
* [TwoPhaseCapillaryPressureTable](TwoPhaseCapillaryPressureTable.md)
* [TwoPhaseRelativePermeabilityTable](TwoPhaseRelativePermeabilityTable.md)
* [UniformInitialCondition](UniformInitialCondition.md)
* [ValidityRange](ValidityRange.md)
* [WaterPvt](WaterPvt.md)
* [uuid](uuid.md)


## Functions

### load_stratigraphic_section

```cpp
StratigraphicSection load_stratigraphic_section(std::string_view filename)
```


 API function for loading a StratigraphicSection. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### load_physical_problem

```cpp
PhysicalProblem load_physical_problem(std::string_view filename)
```


 API function for loading a PhysicalProblem. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### load_cross_section

```cpp
CrossSection load_cross_section(std::string_view filename)
```


 API function for loading a CrossSection. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### register_simulation_leaf

```cpp
void register_simulation_leaf(PContext & context)
```


 Register a leaf class so that it can be saved through a pointer to its base. The leaf type name is written in files: it must never change. Libraries defining their own leaf classes call this from a function given to BitseryExtensions::register_functions. Such leaf classes are saved and loaded like the built-in ones, but validate_physical_problem does not check their content, and simulator writers reject the leaf classes they do not support.

### register_explicit_serialize_pcontext

```cpp
void register_explicit_serialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to serialize the objects in the explicit library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### build_structural_model_fault_blocks

```cpp
void build_structural_model_fault_blocks(StructuralModel & structural_model)
```


 Group the Blocks of the StructuralModel into new FaultBlocks: Blocks sharing a Surface which is not a Fault are in the same FaultBlock. If the model has no Fault, all the Blocks are put in a single FaultBlock. Existing FaultBlocks are kept: a full new set is created next to them, so callers can compare both sets (e.g. to detect splits and merges).

### complete_stratigraphic_unit_block_relationships

```cpp
StratigraphicUnitToBlockResult complete_stratigraphic_unit_block_relationships(ImplicitStructuralModel & implicit_model)
```


### load_implicit_cross_section

```cpp
ImplicitCrossSection load_implicit_cross_section(std::string_view filename)
```


 API function for loading an ImplicitCrossSection. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### load_implicit_structural_model

```cpp
ImplicitStructuralModel load_implicit_structural_model(std::string_view filename)
```


 API function for loading an ImplicitStructuralModel. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### load_stratigraphic_model

```cpp
StratigraphicModel load_stratigraphic_model(std::string_view filename)
```


 API function for loading a StratigraphicModel. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### validate_physical_problem

```cpp
std::vector<std::string> validate_physical_problem(const PhysicalProblem & problem)
```


 Check the problem consistency, independently of any simulator and model. Returns one message per issue, empty if the problem is valid. Only the content of the leaf classes defined in this library is checked: leaf classes registered by other libraries are accepted as is.

### register_explicit_deserialize_pcontext

```cpp
void register_explicit_deserialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to deserialize the objects in the explicit library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### load_structural_model

```cpp
StructuralModel load_structural_model(std::string_view filename)
```


 API function for loading a StructuralModel. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### load_horizons_stack

```cpp
HorizonsStack<dimension> load_horizons_stack(std::string_view filename)
```


 API function for loading a HorizonsStack. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

**return** Loaded HorizonsStack.

### save_physical_problem

```cpp
std::vector<std::string> save_physical_problem(const PhysicalProblem & problem, std::string_view filename)
```


 API function for saving a PhysicalProblem. The adequate saver is called depending on the given filename extension.

**problem** [in] PhysicalProblem to save.

**filename** [in] Path to the file where save the PhysicalProblem.

### assign_edged_curve_geographic_coordinate_system_info

```cpp
void assign_edged_curve_geographic_coordinate_system_info(const EdgedCurve<dimension> & mesh, EdgedCurveBuilder<dimension> & builder, std::string_view crs_name, GeographicCoordinateSystemInfo info)
```


### phase_name

```cpp
std::string_view phase_name(PHASE phase)
```


### save_cross_section

```cpp
std::vector<std::string> save_cross_section(const CrossSection & cross_section, std::string_view filename)
```


 API function for saving a CrossSection. The adequate saver is called depending on the given filename extension.

**cross_section** [in] CrossSection to save.

**filename** [in] Path to the file where save the CrossSection.

### save_structural_model

```cpp
std::vector<std::string> save_structural_model(const StructuralModel & structural_model, std::string_view filename)
```


 API function for saving a StructuralModel. The adequate saver is called depending on the given filename extension.

**structural_model** [in] StructuralModel to save.

**filename** [in] Path to the file where save the StructuralModel.

### save_implicit_cross_section

```cpp
std::vector<std::string> save_implicit_cross_section(const ImplicitCrossSection & implicit_model, std::string_view filename)
```


 API function for saving an ImplicitCrossSection. The adequate saver is called depending on the given filename extension.

**implicit_model** [in] ImplicitCrossSection to save.

**filename** [in] Path to the file where save the ImplicitCrossSection.

### save_stratigraphic_model

```cpp
std::vector<std::string> save_stratigraphic_model(const StratigraphicModel & stratigraphic_model, std::string_view filename)
```


 API function for saving a StratigraphicModel. The adequate saver is called depending on the given filename extension.

**stratigraphic_model** [in] StratigraphicModel to save.

**filename** [in] Path to the file where save the StratigraphicModel.

### save_implicit_structural_model

```cpp
std::vector<std::string> save_implicit_structural_model(const ImplicitStructuralModel & implicit_model, std::string_view filename)
```


 API function for saving an ImplicitStructuralModel. The adequate saver is called depending on the given filename extension.

**implicit_model** [in] ImplicitStructuralModel to save.

**filename** [in] Path to the file where save the ImplicitStructuralModel.

### save_stratigraphic_section

```cpp
std::vector<std::string> save_stratigraphic_section(const StratigraphicSection & stratigraphic_section, std::string_view filename)
```


 API function for saving a StratigraphicSection. The adequate saver is called depending on the given filename extension.

**stratigraphic_section** [in] StratigraphicSection to save.

**filename** [in] Path to the file where save the StratigraphicSection.

### register_simulation_serialize_pcontext

```cpp
void register_simulation_serialize_pcontext(PContext & context)
```


### save_horizons_stack

```cpp
std::vector<std::string> save_horizons_stack(const HorizonsStack<dimension> & horizons_stack, std::string_view filename)
```


 API function for saving a HorizonsStack. The adequate saver is called depending on the given filename extension.

**horizons_stack** [in] HorizonsStack to save.

**filename** [in] Path to the file where save the brep.

### register_simulation_deserialize_pcontext

```cpp
void register_simulation_deserialize_pcontext(PContext & context)
```


### assign_point_set_geographic_coordinate_system_info

```cpp
void assign_point_set_geographic_coordinate_system_info(const PointSet<dimension> & mesh, PointSetBuilder<dimension> & builder, std::string_view crs_name, GeographicCoordinateSystemInfo info)
```


### validate_physical_problem_regions

```cpp
std::vector<std::string> validate_physical_problem_regions(const PhysicalProblem & problem, const BRep & model)
```


 Check that every region referenced by the problem is a Block or a collection of Blocks of the model (BlockCollection, StratigraphicUnit...), that no Block is covered by two materials or two initial conditions, and that the recorded model id, if any, matches. Returns one message per issue, empty if valid.

### implicit_cross_section_additional_files

```cpp
AdditionalFiles implicit_cross_section_additional_files(std::string_view filename)
```


### implicit_structural_model_additional_files

```cpp
AdditionalFiles implicit_structural_model_additional_files(std::string_view filename)
```


### stratigraphic_model_additional_files

```cpp
AdditionalFiles stratigraphic_model_additional_files(std::string_view filename)
```


### stratigraphic_section_additional_files

```cpp
AdditionalFiles stratigraphic_section_additional_files(std::string_view filename)
```


### cross_section_additional_files

```cpp
AdditionalFiles cross_section_additional_files(std::string_view filename)
```


### structural_model_additional_files

```cpp
AdditionalFiles structural_model_additional_files(std::string_view filename)
```


### physical_problem_additional_files

```cpp
AdditionalFiles physical_problem_additional_files(std::string_view filename)
```


### is_implicit_cross_section_loadable

```cpp
Percentage is_implicit_cross_section_loadable(std::string_view filename)
```


### is_implicit_structural_model_loadable

```cpp
Percentage is_implicit_structural_model_loadable(std::string_view filename)
```


### is_stratigraphic_model_loadable

```cpp
Percentage is_stratigraphic_model_loadable(std::string_view filename)
```


### is_stratigraphic_section_loadable

```cpp
Percentage is_stratigraphic_section_loadable(std::string_view filename)
```


### is_cross_section_loadable

```cpp
Percentage is_cross_section_loadable(std::string_view filename)
```


### is_structural_model_loadable

```cpp
Percentage is_structural_model_loadable(std::string_view filename)
```


### horizons_stack_additional_files

```cpp
AdditionalFiles horizons_stack_additional_files(std::string_view filename)
```


### is_physical_problem_loadable

```cpp
Percentage is_physical_problem_loadable(std::string_view filename)
```


### is_physical_problem_saveable

```cpp
bool is_physical_problem_saveable(const PhysicalProblem & problem, std::string_view filename)
```


### assign_solid_mesh_geographic_coordinate_system_info

```cpp
void assign_solid_mesh_geographic_coordinate_system_info(const SolidMesh<dimension> & mesh, SolidMeshBuilder<dimension> & builder, std::string_view crs_name, GeographicCoordinateSystemInfo info)
```


### implicit_cross_section_object_priority

```cpp
index_t implicit_cross_section_object_priority(std::string_view filename)
```


### implicit_structural_model_object_priority

```cpp
index_t implicit_structural_model_object_priority(std::string_view filename)
```


### stratigraphic_model_object_priority

```cpp
index_t stratigraphic_model_object_priority(std::string_view filename)
```


### stratigraphic_section_object_priority

```cpp
index_t stratigraphic_section_object_priority(std::string_view filename)
```


### cross_section_object_priority

```cpp
index_t cross_section_object_priority(std::string_view filename)
```


### structural_model_object_priority

```cpp
index_t structural_model_object_priority(std::string_view filename)
```


### physical_problem_object_priority

```cpp
index_t physical_problem_object_priority(std::string_view filename)
```


### is_cross_section_saveable

```cpp
bool is_cross_section_saveable(const CrossSection & cross_section, std::string_view filename)
```


### is_structural_model_saveable

```cpp
bool is_structural_model_saveable(const StructuralModel & structural_model, std::string_view filename)
```


### is_implicit_cross_section_saveable

```cpp
bool is_implicit_cross_section_saveable(const ImplicitCrossSection & section, std::string_view filename)
```


### is_horizons_stack_loadable

```cpp
Percentage is_horizons_stack_loadable(std::string_view filename)
```


### is_horizons_stack_saveable

```cpp
bool is_horizons_stack_saveable(const HorizonsStack<dimension> & horizons_stack, std::string_view filename)
```


### is_stratigraphic_model_saveable

```cpp
bool is_stratigraphic_model_saveable(const StratigraphicModel & stratigraphic_model, std::string_view filename)
```


### is_stratigraphic_section_saveable

```cpp
bool is_stratigraphic_section_saveable(const StratigraphicSection & stratigraphic_section, std::string_view filename)
```


### is_implicit_structural_model_saveable

```cpp
bool is_implicit_structural_model_saveable(const ImplicitStructuralModel & implicit_model, std::string_view filename)
```


### assign_surface_mesh_geographic_coordinate_system_info

```cpp
void assign_surface_mesh_geographic_coordinate_system_info(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder, std::string_view crs_name, GeographicCoordinateSystemInfo info)
```


### horizons_stack_object_priority

```cpp
index_t horizons_stack_object_priority(std::string_view filename)
```


### assign_brep_geographic_coordinate_system_info

```cpp
void assign_brep_geographic_coordinate_system_info(const BRep & brep, BRepBuilder & builder, std::string_view crs_name, const GeographicCoordinateSystemInfo & info)
```


### assign_section_geographic_coordinate_system_info

```cpp
void assign_section_geographic_coordinate_system_info(const Section & section, SectionBuilder & builder, std::string_view crs_name, const GeographicCoordinateSystemInfo & info)
```


### convert_edged_curve_coordinate_reference_system

```cpp
void convert_edged_curve_coordinate_reference_system(const EdgedCurve<dimension> & mesh, EdgedCurveBuilder<dimension> & builder, std::string_view crs_name, GeographicCoordinateSystemInfo info)
```


### convert_point_set_coordinate_reference_system

```cpp
void convert_point_set_coordinate_reference_system(const PointSet<dimension> & mesh, PointSetBuilder<dimension> & builder, std::string_view crs_name, GeographicCoordinateSystemInfo info)
```


### convert_solid_mesh_coordinate_reference_system

```cpp
void convert_solid_mesh_coordinate_reference_system(const SolidMesh<dimension> & mesh, SolidMeshBuilder<dimension> & builder, std::string_view crs_name, GeographicCoordinateSystemInfo info)
```


### convert_surface_mesh_coordinate_reference_system

```cpp
void convert_surface_mesh_coordinate_reference_system(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder, std::string_view crs_name, GeographicCoordinateSystemInfo info)
```


### convert_brep_coordinate_reference_system

```cpp
void convert_brep_coordinate_reference_system(const BRep & brep, BRepBuilder & builder, std::string_view crs_name, const GeographicCoordinateSystemInfo & info)
```


### convert_section_coordinate_reference_system

```cpp
void convert_section_coordinate_reference_system(const Section & section, SectionBuilder & builder, std::string_view crs_name, const GeographicCoordinateSystemInfo & info)
```


### phase_component

```cpp
std::optional<index_t> phase_component(const FluidModel & fluid, PHASE phase)
```


 Component carried by a phase. It is defined when the fluid has one component per phase, in the phase order (e.g. dead oil or CO2-brine). Simulator writers use it to translate phase-based data, such as boundary fluid fractions, into component indices.



## Enums

| enum class PHASE |

--

| oil |
| gas |
| water |



| enum class COMPOSITION_BASIS |

--

| mole |
| mass |



| enum class CO2_BRINE_CORRELATION |

--

| phillips |
| ezrokhi |





