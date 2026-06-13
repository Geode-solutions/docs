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

* [BRepMappings](BRepMappings.md)
* [BlockRelationships](BlockRelationships.md)
* [GeodeConversionException](GeodeConversionException.md)
* [GeodeConversionModelException](GeodeConversionModelException.md)
* [GeodeConversionModelLibrary](GeodeConversionModelLibrary.md)
* [IndexToBRepMeshElementsMapping](IndexToBRepMeshElementsMapping.md)
* [IndexToModelMeshElementsMapping](IndexToModelMeshElementsMapping.md)
* [IndexToSectionMeshElementsMapping](IndexToSectionMeshElementsMapping.md)
* [ModelBuildTopologyParameters](ModelBuildTopologyParameters.md)
* [ModelBuilderFromUniqueVertices](ModelBuilderFromUniqueVertices.md)
* [uuid](uuid.md)


## Functions

### add_brep_segmentation

```cpp
BRepMappings add_brep_segmentation(BRep & brep)
```


### remove_brep_segmentation

```cpp
BRepMappings remove_brep_segmentation(BRep & brep)
```


### determine_blocks

```cpp
std::vector<BlockRelationships> determine_blocks(const BRep & brep)
```


### convert_surface_elements_into_section

```cpp
std::tuple<Section, VertexIndexMapping, IndexToModelMeshElementsMapping> convert_surface_elements_into_section(SurfaceMesh2D & surface, absl::Span<const index_t> corner_vertices, absl::Span<const index_t> line_edges)
```


### build_blocks

```cpp
std::vector<uuid> build_blocks(const BRep & brep, BRepBuilder & builder, absl::Span<const BlockRelationships> blocks_to_build)
```


### add_sharp_features

```cpp
SectionMappings add_sharp_features(Section & model, double max_angle)
```


 Update the given Section, with the sharp features (e.g., points where the angle between the edges is higher than the given max_angle) on the lines explicited into corners, eventually splitting input lines.

**model** [in] Section

**max_angle** [in] Angle between the edges under which their common vertex is considered a sharp feature.

### convert_meshes_into_section

```cpp
std::tuple<Section, SectionMappings> convert_meshes_into_section(absl::Span<const std::reference_wrapper<const PointSet2D>> corners, absl::Span<const std::reference_wrapper<const EdgedCurve2D>> curves, absl::Span<const std::reference_wrapper<const SurfaceMesh2D>> surfaces)
```


### remove_sharp_features

```cpp
SectionMappings remove_sharp_features(Section & model)
```


 Update the given Section removing the sharp features stored in a CornerCollection2D, and if necessary merge input lines.

**model** [in] Section

### build_blocks

```cpp
void build_blocks(const BRep & brep, BRepBuilder & builder)
```


### add_breps_block_mapping_case_bijective

```cpp
void add_breps_block_mapping_case_bijective(const BRep & initial_brep, const BRep & output_brep, ModelGenericMapping & brep_mapping)
```


### add_breps_block_mapping_case_surjective

```cpp
void add_breps_block_mapping_case_surjective(const BRep & initial_brep, const BRep & output_brep, ModelGenericMapping & brep_mapping)
```


### convert_meshes_into_brep

```cpp
std::tuple<BRep, BRepMappings> convert_meshes_into_brep(absl::Span<const std::reference_wrapper<const PointSet3D>> corners, absl::Span<const std::reference_wrapper<const EdgedCurve3D>> curves, absl::Span<const std::reference_wrapper<const SurfaceMesh3D>> surfaces)
```


 Convert a set of EdgedCurve3D and SurfaceMesh3D into a BRep, without meshed Blocks. This function first merges the input surfaces together and then uses the adjacencies between surface polygons to determine BRep Surface extensions and, as a consequence, geometries of BRep Lines. BRep Lines will correspond to merged SurfaceMesh3D edges shared by 1 or more than 2 polygons, by 2 polygons if there are not set as adjacent, or by Curve edges. A colocation between the points of the input corners, curves and the merged surface is used to determine their common points, the position of the corners and the curves in the final model, and the corresponding topology of the corners and lines (internal/separating a line/surface in two/...).

**corners** [in] Input corners

**curves** [in] Input curves

**surfaces** [in] Input surfaces

**return** the BRep and the mapping between input corners, curves and surfaces and Corner, Line and Surface uuid. One input surface could contribute to several Surfaces depending on the merging result.

### add_sharp_features

```cpp
BRepMappings add_sharp_features(BRep & model, double max_angle)
```


 Update the given BRep, with the sharp features (e.g., edges where the angle between the normals of the facets is higher than the given max_angle) on the lines and surfaces explicited into corners and lines, eventually splitting input lines and surfaces.

**model** [in] BRep

**max_angle** [in] Dihedral angle between the facets and angle between line edges, under which their common edge/vertex is considered a sharp feature.

### build_model_component_mapping

```cpp
ModelGenericMapping build_model_component_mapping(const Model & out_model, const ModelMeshesElementMapping & mesh_element_mappings)
```


### convert_surface_into_section_from_attribute

```cpp
std::tuple<Section, ModelMeshesVertexMapping, ModelMeshesElementMapping> convert_surface_into_section_from_attribute(SurfaceMesh2D & surface, std::string_view attribute_name)
```


 Convert a SurfaceMesh2D into a Section with meshed Surfaces. This function uses the Attribute values on each surface polygon to determine Section surface. Section Lines will correspond to SurfaceMesh2D edges shared by only 1 polygon, or by 2 polygons with different attribute values.

**solid** [in] Input solid

**attribute_name** [in] Name of attribute stored on solid polygons

**warning** Attribute should be convertible to float.

### add_breps_block_mapping_case_multivaluate

```cpp
void add_breps_block_mapping_case_multivaluate(const BRep & initial_brep, const BRep & output_brep, ModelGenericMapping & brep_mapping)
```


### build_brep_component_mapping

```cpp
ModelGenericMapping build_brep_component_mapping(const BRep & out_brep, const BRepMeshesElementMapping & mesh_element_mappings)
```


### remove_sharp_features

```cpp
BRepMappings remove_sharp_features(BRep & model)
```


 Update the given BRep removing the sharp features stored in a CornerCollection3D and a LineCollection3D, and if necessary merge input lines and surfaces.

**model** [in] Section

### curve_from_surface_borders

```cpp
std::unique_ptr<EdgedCurve<dimension>> curve_from_surface_borders(const SurfaceMesh<dimension> & surface)
```


### convert_solid_elements_into_brep

```cpp
std::tuple<BRep, VertexIndexMapping, IndexToBRepMeshElementsMapping> convert_solid_elements_into_brep(SolidMesh3D & solid, absl::Span<const index_t> corner_vertices, absl::Span<const index_t> line_edges, absl::Span<const index_t> surface_facets)
```


 Convert a SolidMesh3D into a BRep without meshed Blocks. This function uses the given solid points, edges and facets to define BRep corners, lines and surfaces. Returns VertexIndexMappings mapping the indices of the vertices in the given solid to the corresponding unique vertices in the output model, and IndexToBRepMeshElementsMapping mapping the indices of the given corner, line and surface elements to their elements in the output model. The attributes on the vertices and polyhedra of the given solid will be transfered to the corresponding blocks in the output model.

**solid** [in] Input solid

### surface_facets_from_attribute

```cpp
std::vector<index_t> surface_facets_from_attribute(SolidMesh3D & solid, std::string_view attribute_name)
```




