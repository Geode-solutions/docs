# namespace geode



## Namespaces

* [detail](detail/index.md)


## Records

* [BRepMappings](BRepMappings.md)
* [BRepTopologyRebuilder](BRepTopologyRebuilder.md)
* [BlocksBuilderFromSolid](BlocksBuilderFromSolid.md)
* [ConversionModelLibrary](ConversionModelLibrary.md)
* [IndexToBRepMeshElementsMapping](IndexToBRepMeshElementsMapping.md)
* [IndexToModelMeshElementsMapping](IndexToModelMeshElementsMapping.md)
* [IndexToSectionMeshElementsMapping](IndexToSectionMeshElementsMapping.md)
* [ModelMappings](ModelMappings.md)
* [uuid](uuid.md)


## Functions

### build_model_component_mapping

```cpp
ModelMapping build_model_component_mapping(const Model & out_model, const ModelMeshesElementMapping & mesh_element_mappings)
```


### build_brep_component_mapping

```cpp
ModelMapping build_brep_component_mapping(const BRep & out_brep, const BRepMeshesElementMapping & mesh_element_mappings)
```


### build_blocks

```cpp
void build_blocks(BRep & brep)
```


### convert_meshes_into_brep

```cpp
std::tuple<BRep, ModelMappings> convert_meshes_into_brep(absl::Span<const std::reference_wrapper<const PointSet3D> > corners, absl::Span<const std::reference_wrapper<const EdgedCurve3D> > curves, absl::Span<const std::reference_wrapper<const SurfaceMesh3D> > surfaces)
```


 Convert a set of EdgedCurve3D and SurfaceMesh3D into a BRep, without meshed Blocks. This function first merges the input surfaces together and then uses the adjacencies between surface polygons to determine BRep Surface extensions and, as a consequence, geometries of BRep Lines. BRep Lines will correspond to merged SurfaceMesh3D edges shared by 1 or more than 2 polygons, by 2 polygons if there are not set as adjacent, or by Curve edges. A colocation between the points of the input corners, curves and the merged surface is used to determine their common points, the position of the corners and the curves in the final model, and the corresponding topology of the corners and lines (internal/separating a line/surface in two/...).

**corners** [in] Input corners

**curves** [in] Input curves

**surfaces** [in] Input surfaces

**return** the BRep and the mapping between input corners, curves and surfaces and Corner, Line and Surface uuid. One input surface could contribute to several Surfaces depending on the merging result.

### convert_solid_into_brep_from_adjacencies

```cpp
std::tuple<BRep, VertexIndexMapping, IndexToBRepMeshElementsMapping> convert_solid_into_brep_from_adjacencies(SolidMesh3D & solid)
```


 Convert a SolidMesh3D into a BRep with meshed Blocks. This function uses the adjacencies between solid polyhedra to determine BRep Block extensions and, as a consequence, geometries of BRep Surfaces. BRep Surfaces will correspond to SolidMesh3D facets shared by only 1 polyhedron, or by 2 polyhedra if they are not set as adjacent.

**solid** [in] Input solid

### convert_solid_elements_into_brep

```cpp
std::tuple<BRep, VertexIndexMapping, IndexToBRepMeshElementsMapping> convert_solid_elements_into_brep(SolidMesh3D & solid, Span corner_vertices, Span line_edges, Span surface_facets)
```


 Convert a SolidMesh3D into a BRep without meshed Blocks. This function uses the given solid points, edges and facets to define BRep corners, lines and surfaces. Returns VertexIndexMappings mapping the indices of the vertices in the given solid to the corresponding unique vertices in the output model, and IndexToBRepMeshElementsMapping mapping the indices of the given corner, line and surface elements to their elements in the output model.

**solid** [in] Input solid

### convert_solid_into_brep_from_attribute

```cpp
std::tuple<BRep, VertexIndexMapping, IndexToBRepMeshElementsMapping> convert_solid_into_brep_from_attribute(SolidMesh3D & solid, string_view attribute_name)
```


 Convert a SolidMesh3D into a BRep with meshed Blocks. This function uses Attribute values on each solid polyhedron to determine BRep Block. BRep Surfaces will correspond to SolidMesh3D facets shared by only 1 polyhedron, or by 2 polyhedra with different attribute values.

**solid** [in] Input solid

**attribute_name** [in] Name of attribute stored on solid polyhedra

**warning** Attribute should be convertible to float.

### add_sharp_features

```cpp
std::tuple<BRep, ModelMappings> add_sharp_features(const BRep & model, double max_angle)
```


 Creates a new BRep from the given one, with new lines on the sharp features of the surfaces (edges where the angle between the normals of the facets is higher than the given max_angle).

**model** [in] Input brep

**max_angle** [in] Dihedral angle between the facets under which their common edge is considered a sharp feature.

### convert_surface_elements_into_section

```cpp
std::tuple<Section, VertexIndexMapping, IndexToModelMeshElementsMapping> convert_surface_elements_into_section(SurfaceMesh2D & surface, Span corner_vertices, Span line_edges)
```


### convert_meshes_into_section

```cpp
std::tuple<Section, ModelMappings> convert_meshes_into_section(absl::Span<const std::reference_wrapper<const PointSet2D> > corners, absl::Span<const std::reference_wrapper<const EdgedCurve2D> > curves, absl::Span<const std::reference_wrapper<const SurfaceMesh2D> > surfaces)
```


### convert_surface_into_section_from_attribute

```cpp
std::tuple<Section, ModelMeshesVertexMapping, ModelMeshesElementMapping> convert_surface_into_section_from_attribute(SurfaceMesh2D & surface, string_view attribute_name)
```


 Convert a SurfaceMesh2D into a Section with meshed Surfaces. This function uses the Attribute values on each surface polygon to determine Section surface. Section Lines will correspond to SurfaceMesh2D edges shared by only 1 polygon, or by 2 polygons with different attribute values.

**solid** [in] Input solid

**attribute_name** [in] Name of attribute stored on solid polygons

**warning** Attribute should be convertible to float.

### add_sharp_features

```cpp
std::tuple<Section, ModelMappings> add_sharp_features(const Section & model, double max_angle)
```


 Creates a new Section from the given one, with new corners on the sharp features of the lines (points where the angle between the edges is higher than the given max_angle).

**model** [in] Input section

**max_angle** [in] Angle between the edges under which their common vertex is considered a sharp feature.



