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

### save_structural_model

```cpp
void save_structural_model(const StructuralModel & structural_model, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/io/structural_model_output.cpp#34
```

 API function for saving a StructuralModel. The adequate saver is called depending on the given filename extension.

**structural_model** [in] StructuralModel to save.

**filename** [in] Path to the file where save the StructuralModel.

### is_structural_model_saveable

```cpp
bool is_structural_model_saveable(const StructuralModel & structural_model, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/io/structural_model_output.cpp#50
```

### save_cross_section

```cpp
void save_cross_section(const CrossSection & cross_section, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/io/cross_section_output.cpp#34
```

 API function for saving a CrossSection. The adequate saver is called depending on the given filename extension.

**cross_section** [in] CrossSection to save.

**filename** [in] Path to the file where save the CrossSection.

### is_cross_section_saveable

```cpp
bool is_cross_section_saveable(const CrossSection & cross_section, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/io/cross_section_output.cpp#50
```

### save_implicit_structural_model

```cpp
void save_implicit_structural_model(const ImplicitStructuralModel & implicit_model, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/implicit_structural_model_output.cpp#38
```

 API function for saving an ImplicitStructuralModel. The adequate saver is called depending on the given filename extension.

**implicit_model** [in] ImplicitStructuralModel to save.

**filename** [in] Path to the file where save the ImplicitStructuralModel.

### save_horizons_stack

```cpp
void save_horizons_stack(const HorizonsStack<dimension> & horizons_stack, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/horizons_stack_output.cpp#35
```

 API function for saving a HorizonsStack. The adequate saver is called depending on the given filename extension.

**horizons_stack** [in] HorizonsStack to save.

**filename** [in] Path to the file where save the brep.

### load_structural_model

```cpp
StructuralModel load_structural_model(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/io/structural_model_input.cpp#34
```

 API function for loading a StructuralModel. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### check_structural_model_missing_files

```cpp
MissingFiles check_structural_model_missing_files(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/io/structural_model_input.cpp#73
```

### load_implicit_cross_section

```cpp
ImplicitCrossSection load_implicit_cross_section(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/implicit_cross_section_input.cpp#34
```

 API function for loading an ImplicitCrossSection. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### check_implicit_cross_section_missing_files

```cpp
MissingFiles check_implicit_cross_section_missing_files(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/implicit_cross_section_input.cpp#72
```

### load_cross_section

```cpp
CrossSection load_cross_section(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/io/cross_section_input.cpp#35
```

 API function for loading a CrossSection. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### check_cross_section_missing_files

```cpp
MissingFiles check_cross_section_missing_files(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/io/cross_section_input.cpp#71
```

### load_horizons_stack

```cpp
HorizonsStack<dimension> load_horizons_stack(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/horizons_stack_input.cpp#36
```

 API function for loading a HorizonsStack. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

**return** Loaded HorizonsStack.

### check_horizons_stack_missing_files

```cpp
typename HorizonsStackInput<dimension>::MissingFiles check_horizons_stack_missing_files(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/horizons_stack_input.cpp#61
```

### load_implicit_structural_model

```cpp
ImplicitStructuralModel load_implicit_structural_model(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/implicit_structural_model_input.cpp#36
```

 API function for loading an ImplicitStructuralModel. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### check_implicit_structural_model_missing_files

```cpp
MissingFiles check_implicit_structural_model_missing_files(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/implicit_structural_model_input.cpp#76
```

### register_explicit_serialize_pcontext

```cpp
void register_explicit_serialize_pcontext(PContext & context)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/bitsery_archive.cpp#97
```

 Register all the information needed by Bitsery to serialize the objects in the explicit library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### register_explicit_deserialize_pcontext

```cpp
void register_explicit_deserialize_pcontext(PContext & context)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/bitsery_archive.cpp#102
```

 Register all the information needed by Bitsery to deserialize the objects in the explicit library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### save_implicit_cross_section

```cpp
void save_implicit_cross_section(const ImplicitCrossSection & implicit_model, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/implicit_cross_section_output.cpp#38
```

 API function for saving an ImplicitCrossSection. The adequate saver is called depending on the given filename extension.

**implicit_model** [in] ImplicitCrossSection to save.

**filename** [in] Path to the file where save the ImplicitCrossSection.

### is_implicit_structural_model_saveable

```cpp
bool is_implicit_structural_model_saveable(const ImplicitStructuralModel & implicit_model, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/implicit_structural_model_output.cpp#57
```

### load_stratigraphic_section

```cpp
StratigraphicSection load_stratigraphic_section(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/stratigraphic_section_input.cpp#34
```

 API function for loading a StratigraphicSection. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### check_stratigraphic_section_missing_files

```cpp
MissingFiles check_stratigraphic_section_missing_files(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/stratigraphic_section_input.cpp#73
```

### is_horizons_stack_saveable

```cpp
bool is_horizons_stack_saveable(const HorizonsStack<dimension> & horizons_stack, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/horizons_stack_output.cpp#53
```

### is_implicit_cross_section_saveable

```cpp
bool is_implicit_cross_section_saveable(const ImplicitCrossSection & section, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/implicit_cross_section_output.cpp#56
```

### assign_edged_curve_geographic_coordinate_system_info

```cpp
void assign_edged_curve_geographic_coordinate_system_info(const EdgedCurve<dimension> & mesh, EdgedCurveBuilder<dimension> & builder, string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#151
```

### assign_point_set_geographic_coordinate_system_info

```cpp
void assign_point_set_geographic_coordinate_system_info(const PointSet<dimension> & mesh, PointSetBuilder<dimension> & builder, string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#162
```

### assign_solid_mesh_geographic_coordinate_system_info

```cpp
void assign_solid_mesh_geographic_coordinate_system_info(const SolidMesh<dimension> & mesh, SolidMeshBuilder<dimension> & builder, string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#173
```

### assign_surface_mesh_geographic_coordinate_system_info

```cpp
void assign_surface_mesh_geographic_coordinate_system_info(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder, string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#184
```

### assign_brep_geographic_coordinate_system_info

```cpp
void assign_brep_geographic_coordinate_system_info(const BRep & brep, BRepBuilder & builder, string_view crs_name, const GeographicCoordinateSystem3D::Info & info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#194
```

### assign_section_geographic_coordinate_system_info

```cpp
void assign_section_geographic_coordinate_system_info(const Section & section, SectionBuilder & builder, string_view crs_name, const GeographicCoordinateSystem2D::Info & info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#217
```

### convert_edged_curve_coordinate_reference_system

```cpp
void convert_edged_curve_coordinate_reference_system(const EdgedCurve<dimension> & mesh, EdgedCurveBuilder<dimension> & builder, string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#240
```

### convert_point_set_coordinate_reference_system

```cpp
void convert_point_set_coordinate_reference_system(const PointSet<dimension> & mesh, PointSetBuilder<dimension> & builder, string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#251
```

### convert_solid_mesh_coordinate_reference_system

```cpp
void convert_solid_mesh_coordinate_reference_system(const SolidMesh<dimension> & mesh, SolidMeshBuilder<dimension> & builder, string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#262
```

### convert_surface_mesh_coordinate_reference_system

```cpp
void convert_surface_mesh_coordinate_reference_system(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder, string_view crs_name, typename GeographicCoordinateSystem<dimension>::Info info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#273
```

### convert_brep_coordinate_reference_system

```cpp
void convert_brep_coordinate_reference_system(const BRep & brep, BRepBuilder & builder, string_view crs_name, const GeographicCoordinateSystem3D::Info & info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#283
```

### convert_section_coordinate_reference_system

```cpp
void convert_section_coordinate_reference_system(const Section & section, SectionBuilder & builder, string_view crs_name, const GeographicCoordinateSystem2D::Info & info)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/geometry/geographic_coordinate_system_helper.cpp#306
```

### load_stratigraphic_model

```cpp
StratigraphicModel load_stratigraphic_model(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/stratigraphic_model_input.cpp#36
```

 API function for loading a StratigraphicModel. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### check_stratigraphic_model_missing_files

```cpp
MissingFiles check_stratigraphic_model_missing_files(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/stratigraphic_model_input.cpp#76
```

### save_stratigraphic_model

```cpp
void save_stratigraphic_model(const StratigraphicModel & stratigraphic_model, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/stratigraphic_model_output.cpp#39
```

 API function for saving a StratigraphicModel. The adequate saver is called depending on the given filename extension.

**stratigraphic_model** [in] StratigraphicModel to save.

**filename** [in] Path to the file where save the StratigraphicModel.

### is_stratigraphic_model_saveable

```cpp
bool is_stratigraphic_model_saveable(const StratigraphicModel & stratigraphic_model, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/stratigraphic_model_output.cpp#57
```

### save_stratigraphic_section

```cpp
void save_stratigraphic_section(const StratigraphicSection & stratigraphic_section, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/stratigraphic_section_output.cpp#39
```

 API function for saving a StratigraphicSection. The adequate saver is called depending on the given filename extension.

**stratigraphic_section** [in] StratigraphicSection to save.

**filename** [in] Path to the file where save the StratigraphicSection.

### is_stratigraphic_section_saveable

```cpp
bool is_stratigraphic_section_saveable(const StratigraphicSection & stratigraphic_section, string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/io/stratigraphic_section_output.cpp#58
```



