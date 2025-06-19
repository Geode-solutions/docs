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

* [BRepBuildTopologyParameters](BRepBuildTopologyParameters.md)
* [BlockRelationships](BlockRelationships.md)
* [BlocksBuilderFromSolid](BlocksBuilderFromSolid.md)
* [ConversionModelLibrary](ConversionModelLibrary.md)
* [IndexToBRepMeshElementsMapping](IndexToBRepMeshElementsMapping.md)
* [IndexToModelMeshElementsMapping](IndexToModelMeshElementsMapping.md)
* [IndexToSectionMeshElementsMapping](IndexToSectionMeshElementsMapping.md)
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


### convert_meshes_into_brep

```cpp
tuple convert_meshes_into_brep(Span corners, Span curves, Span surfaces)
```


 Convert a set of EdgedCurve3D and SurfaceMesh3D into a BRep, without meshed Blocks. This function first merges the input surfaces together and then uses the adjacencies between surface polygons to determine BRep Surface extensions and, as a consequence, geometries of BRep Lines. BRep Lines will correspond to merged SurfaceMesh3D edges shared by 1 or more than 2 polygons, by 2 polygons if there are not set as adjacent, or by Curve edges. A colocation between the points of the input corners, curves and the merged surface is used to determine their common points, the position of the corners and the curves in the final model, and the corresponding topology of the corners and lines (internal/separating a line/surface in two/...).

**corners** [in] Input corners

**curves** [in] Input curves

**surfaces** [in] Input surfaces

**return** the BRep and the mapping between input corners, curves and surfaces and Corner, Line and Surface uuid. One input surface could contribute to several Surfaces depending on the merging result.

### convert_solid_elements_into_brep

```cpp
tuple convert_solid_elements_into_brep(SolidMesh3D & solid, Span corner_vertices, Span line_edges, Span surface_facets)
```


 Convert a SolidMesh3D into a BRep without meshed Blocks. This function uses the given solid points, edges and facets to define BRep corners, lines and surfaces. Returns VertexIndexMappings mapping the indices of the vertices in the given solid to the corresponding unique vertices in the output model, and IndexToBRepMeshElementsMapping mapping the indices of the given corner, line and surface elements to their elements in the output model. The attributes on the vertices and polyhedra of the given solid will be transfered to the corresponding blocks in the output model.

**solid** [in] Input solid

### surface_facets_from_attribute

```cpp
vector surface_facets_from_attribute(SolidMesh3D & solid, basic_string_view attribute_name)
```


### convert_surface_elements_into_section

```cpp
tuple convert_surface_elements_into_section(SurfaceMesh2D & surface, Span corner_vertices, Span line_edges)
```


### convert_meshes_into_section

```cpp
tuple convert_meshes_into_section(Span corners, Span curves, Span surfaces)
```


### convert_surface_into_section_from_attribute

```cpp
tuple convert_surface_into_section_from_attribute(SurfaceMesh2D & surface, basic_string_view attribute_name)
```


 Convert a SurfaceMesh2D into a Section with meshed Surfaces. This function uses the Attribute values on each surface polygon to determine Section surface. Section Lines will correspond to SurfaceMesh2D edges shared by only 1 polygon, or by 2 polygons with different attribute values.

**solid** [in] Input solid

**attribute_name** [in] Name of attribute stored on solid polygons

**warning** Attribute should be convertible to float.

### add_sharp_features

```cpp
ModelMappings add_sharp_features(Section & model, double max_angle)
```


 Update the given Section, with the sharp features (e.g., points where the angle between the edges is higher than the given max_angle) on the lines explicited into corners, eventually splitting input lines.

**model** [in] Section

**max_angle** [in] Angle between the edges under which their common vertex is considered a sharp feature.

### remove_sharp_features

```cpp
ModelMappings remove_sharp_features(Section & model)
```


 Update the given Section removing the sharp features stored in a CornerCollection2D, and if necessary merge input lines.

**model** [in] Section

### add_sharp_features

```cpp
ModelMappings add_sharp_features(BRep & model, double max_angle)
```


 Update the given BRep, with the sharp features (e.g., edges where the angle between the normals of the facets is higher than the given max_angle) on the lines and surfaces explicited into corners and lines, eventually splitting input lines and surfaces.

**model** [in] BRep

**max_angle** [in] Dihedral angle between the facets and angle between line edges, under which their common edge/vertex is considered a sharp feature.

### remove_sharp_features

```cpp
ModelMappings remove_sharp_features(BRep & model)
```


 Update the given BRep removing the sharp features stored in a CornerCollection3D and a LineCollection3D, and if necessary merge input lines and surfaces.

**model** [in] Section

### determine_blocks

```cpp
vector determine_blocks(const BRep & brep)
```


### build_blocks

```cpp
vector build_blocks(const BRep & brep, BRepBuilder & builder, Span blocks_to_build)
```


### build_blocks

```cpp
void build_blocks(const BRep & brep, BRepBuilder & builder)
```


### add_breps_block_mapping

```cpp
void add_breps_block_mapping(const BRep & initial_brep, const BRep & output_brep, geode::ModelGenericMapping & brep_mapping)
```


### build_topology_using_unique_vertices

```cpp
ModelMappings build_topology_using_unique_vertices(BRep & brep, const BRepBuildTopologyParameters & parameters)
```




