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

# namespace detail



## Records

* [ComponentsStorage](ComponentsStorage.md)
* [EdgedCurveIdentifier](EdgedCurveIdentifier.md)
* [EdgedCurveMerger](EdgedCurveMerger.md)
* [FacetStorage](FacetStorage.md)
* [GraphIdentifier](GraphIdentifier.md)
* [MeshStorage](MeshStorage.md)
* [OrientedVertexCycle](OrientedVertexCycle.md)
* [PointSetMerger](PointSetMerger.md)
* [Propagator](Propagator.md)
* [RelationshipsImpl](RelationshipsImpl.md)
* [SolidIdentifier](SolidIdentifier.md)
* [SolidInfo](SolidInfo.md)
* [SolidMeshMerger](SolidMeshMerger.md)
* [SplitAlongBlockMeshBorders](SplitAlongBlockMeshBorders.md)
* [SplitAlongSolidFacets](SplitAlongSolidFacets.md)
* [SplitAlongSurfaceMeshBorders](SplitAlongSurfaceMeshBorders.md)
* [SurfaceIdentifier](SurfaceIdentifier.md)
* [SurfaceMeshMerger](SurfaceMeshMerger.md)
* [UuidToIndex](UuidToIndex.md)
* [VertexCycle](VertexCycle.md)
* [VertexMerger](VertexMerger.md)


## Functions

### geode_object_input_reader

```cpp
std::unique_ptr<typename Factory::BaseClass> geode_object_input_reader(std::string_view & filename)
```


### create_mesh

```cpp
std::unique_ptr<Mesh> create_mesh(absl::Span<const std::reference_wrapper<const Mesh>> meshes)
```


### solid_polyhedron_is_a_tetrahedron

```cpp
bool solid_polyhedron_is_a_tetrahedron(const SolidMesh3D & solid, index_t polyhedron_id)
```


### position_to_index

```cpp
local_index_t position_to_index(POSITION position)
```


### add_mesh_component

```cpp
void add_mesh_component(ModelBuilder & builder, const MeshComponent & component)
```


### count_range_elements

```cpp
index_t count_range_elements(const Range & range)
```


### coords_multiply

```cpp
Coords<dimension> coords_multiply(const Coords<dimension> & input, double multiplier)
```


### mapping_after_deletion

```cpp
std::vector<index_t> mapping_after_deletion(const std::vector<bool> & to_delete)
```


### register_inlinedvector

```cpp
void register_inlinedvector(PContext & context, std::string_view type)
```


### repair_non_manifold_vertices

```cpp
GenericMapping<index_t> repair_non_manifold_vertices(const SolidMesh<dimension> & mesh, SolidMeshBuilder<dimension> & builder)
```


### solid_polyhedron_is_a_hexaedron

```cpp
bool solid_polyhedron_is_a_hexaedron(const SolidMesh3D & solid, index_t polyhedron_id)
```


### geode_object_output_writer

```cpp
std::unique_ptr<typename Factory::BaseClass> geode_object_output_writer(std::string_view & filename)
```


### remove_mesh_component

```cpp
void remove_mesh_component(ModelBuilder & builder, const MeshComponent & component)
```


### repair_non_manifold_vertices

```cpp
GenericMapping<index_t> repair_non_manifold_vertices(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder)
```


### repair_non_manifold_vertices

```cpp
GenericMapping<index_t> repair_non_manifold_vertices(const BRep & model, BRepBuilder & builder, const Block3D & block)
```


### coords_divide

```cpp
Coords<dimension> coords_divide(const Coords<dimension> & input, double divider)
```


### repair_non_manifold_vertices

```cpp
GenericMapping<index_t> repair_non_manifold_vertices(const Model & model, typename Model::Builder & builder, const Surface<Model::dim> & surface)
```


### save_segment

```cpp
void save_segment(const Segment<dimension> & segment, std::string_view suffix)
```


### polygon_sort

```cpp
void polygon_sort(Container & vertices)
```


### add_collection_component

```cpp
void add_collection_component(ModelBuilder & builder, const CollectionComponent & component)
```


### geode_object_input_impl

```cpp
typename Factory::BaseClass::InputData geode_object_input_impl(std::string_view type, std::string_view filename, Args... args)
```


### geode_object_output_impl

```cpp
std::vector<std::string> geode_object_output_impl(std::string_view type, const Object & object, std::string_view filename)
```


### copy_corner_components

```cpp
void copy_corner_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### oriented_rotate

```cpp
void oriented_rotate(Container & vertices)
```


### remove_collection_component

```cpp
void remove_collection_component(ModelBuilder & builder, const CollectionComponent & component)
```


### solid_polyhedron_is_a_pyramid

```cpp
bool solid_polyhedron_is_a_pyramid(const SolidMesh3D & solid, index_t polyhedron_id)
```


### position_to_string

```cpp
std::string position_to_string(POSITION position)
```


### coords_add

```cpp
Coords<dimension> coords_add(const Coords<dimension> & input, const Coords<dimension> & other)
```


### save_triangle

```cpp
void save_triangle(const Triangle<dimension> & triangle, std::string_view suffix)
```


### oriented_rotate

```cpp
void oriented_rotate(std::array<index_t, 2> & vertices)
```


### add_to_message

```cpp
void add_to_message(std::string & message, geode::index_t nb_components, std::string_view component_text)
```


### load_section_files

```cpp
void load_section_files(Model & section, std::string_view directory)
```


### load_brep_files

```cpp
void load_brep_files(Model & brep, std::string_view directory)
```


### filter_unsupported_components

```cpp
void filter_unsupported_components(Model & model)
```


### register_geometry_pcontext

```cpp
void register_geometry_pcontext(PContext & context)
```


### coords_substract

```cpp
Coords<dimension> coords_substract(const Coords<dimension> & input, const Coords<dimension> & other)
```


### remove_orientation

```cpp
void remove_orientation(Container & vertices)
```


### build_model_boundaries

```cpp
void build_model_boundaries(const Section & model, SectionBuilder & builder)
```


### save_triangles

```cpp
void save_triangles(const TriangulatedSurface<dimension> & surface, absl::Span<const index_t> indices, std::string_view suffix)
```


### copy_line_components

```cpp
void copy_line_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### coords_multiply_equal

```cpp
void coords_multiply_equal(Coords<dimension> & input, double multiplier)
```


### build_model_boundaries

```cpp
void build_model_boundaries(const BRep & model, BRepBuilder & builder)
```


### solid_polyhedron_is_a_prism

```cpp
bool solid_polyhedron_is_a_prism(const SolidMesh3D & solid, index_t polyhedron_id)
```


### register_basic_pcontext

```cpp
void register_basic_pcontext(PContext & context)
```


### model_component

```cpp
const Component<Model::dim> & model_component(Model & model, const uuid & component_id)
```


### save_tetrahedron

```cpp
void save_tetrahedron(const Tetrahedron & tetrahedron, std::string_view suffix)
```


### coords_divide_equal

```cpp
void coords_divide_equal(Coords<dimension> & input, double divider)
```


### coords_add_equal

```cpp
void coords_add_equal(Coords<dimension> & input, const Coords<dimension> & other)
```


### save_tetrahedra

```cpp
void save_tetrahedra(const TetrahedralSolid3D & solid, absl::Span<const index_t> indices, std::string_view suffix)
```


### coords_substract_equal

```cpp
void coords_substract_equal(Coords<dimension> & input, const Coords<dimension> & other)
```


### copy_surface_components

```cpp
void copy_surface_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_block_components

```cpp
void copy_block_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### register_all_components

```cpp
void register_all_components(Model & model)
```


### copy_model_boundary_components

```cpp
void copy_model_boundary_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const VertexCycle<Container> & m)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const OrientedVertexCycle<Container> & m)
```


### copy_corner_collection_components

```cpp
void copy_corner_collection_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_line_collection_components

```cpp
void copy_line_collection_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_surface_collection_components

```cpp
void copy_surface_collection_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### merge_mappings

```cpp
ModelGenericMapping merge_mappings(const ModelGenericMapping & mappings1, const ModelCopyMapping & mappings2)
```


### polygons_intersection_detection

```cpp
bool polygons_intersection_detection(const Mesh & mesh, const PolygonVertices & polygon, const PolygonVertices & other_polygon)
```


### merge_mappings

```cpp
ModelGenericMapping merge_mappings(const ModelGenericMapping & mappings1, const ModelGenericMapping & mappings2)
```


### section_clone_mapping

```cpp
ModelCopyMapping section_clone_mapping(const Section & model)
```


### copy_to_generic_mappings

```cpp
ModelGenericMapping copy_to_generic_mappings(const ModelCopyMapping & mappings2)
```


### transfer_brep_meshes

```cpp
void transfer_brep_meshes(const BRep & brep, BRepBuilder & brep_builder, BRep && other, const ModelCopyMapping & component_mapping)
```


### copy_block_collection_components

```cpp
void copy_block_collection_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### clone_meshes

```cpp
absl::FixedArray<std::pair<uuid, std::unique_ptr<Mesh>>> clone_meshes(Range && range, index_t nb_components)
```


### copy_corner_geometry

```cpp
void copy_corner_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & corners)
```


### copy_line_geometry

```cpp
void copy_line_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & lines)
```


### copy_surface_geometry

```cpp
void copy_surface_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & surfaces)
```


### copy_block_geometry

```cpp
void copy_block_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & blocks)
```


### copy_vertex_identifier_components

```cpp
void copy_vertex_identifier_components(const Model & from, BuilderTo & builder_to, index_t first_new_unique_vertex_id, const ModelCopyMapping & mapping)
```


### transfer_brep_collections

```cpp
void transfer_brep_collections(const BRep & old_brep, const BRep & new_brep, BRepBuilder & new_brep_builder, const ModelGenericMapping & component_mapping)
```


### brep_clone_mapping

```cpp
ModelCopyMapping brep_clone_mapping(const BRep & model)
```


### merge_mappings

```cpp
SectionMappings merge_mappings(const SectionMappings & mappings1, const SectionMappings & mappings2)
```


### transfer_section_meshes

```cpp
void transfer_section_meshes(const Section & section, SectionBuilder & section_builder, Section && other, const ModelCopyMapping & component_mapping)
```


### transfer_brep_collections

```cpp
void transfer_brep_collections(const BRep & old_brep, const BRep & new_brep, BRepBuilder & new_brep_builder, const ModelUnchangedComponentMapping & unchanged_components)
```


### merge_mappings

```cpp
BRepMappings merge_mappings(const BRepMappings & mappings1, const BRepMappings & mappings2)
```


### transfer_brep_metadata

```cpp
void transfer_brep_metadata(const BRep & old_brep, BRepBuilder & new_brep_builder, const ModelGenericMapping & component_mapping)
```


### transfer_section_collections

```cpp
void transfer_section_collections(const Section & old_section, const Section & new_section, SectionBuilder & new_brep_builder, const ModelGenericMapping & component_mapping)
```


### transfer_section_metadata

```cpp
void transfer_section_metadata(const Section & old_section, SectionBuilder & new_section_builder, const ModelGenericMapping & component_mapping)
```


### transfer_section_collections

```cpp
void transfer_section_collections(const Section & old_section, const Section & new_section, SectionBuilder & new_brep_builder, const ModelUnchangedComponentMapping & unchanged_components)
```


### transfer_pointsets_metadata

```cpp
void transfer_pointsets_metadata(absl::Span<const std::reference_wrapper<const PointSet<ModelBuilder::dim>>> pointsets, ModelBuilder & model_builder, const ModelGenericMapping & component_mapping)
```


### transfer_curves_metadata

```cpp
void transfer_curves_metadata(absl::Span<const std::reference_wrapper<const EdgedCurve<ModelBuilder::dim>>> curves, ModelBuilder & model_builder, const ModelGenericMapping & component_mapping)
```


### transfer_surfaces_metadata

```cpp
void transfer_surfaces_metadata(absl::Span<const std::reference_wrapper<const SurfaceMesh<ModelBuilder::dim>>> surfaces, ModelBuilder & model_builder, const ModelGenericMapping & component_mapping)
```


### transfer_solids_metadata

```cpp
void transfer_solids_metadata(absl::Span<const std::reference_wrapper<const SolidMesh3D>> solids, BRepBuilder & model_builder, const ModelGenericMapping & component_mapping)
```


### line_component_mesh_edges

```cpp
ModelComponentMeshEdges::LineEdges line_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices)
```


### line_component_mesh_edges

```cpp
std::vector<index_t> line_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices, const geode::Line<Model::dim> & line)
```


### surface_component_mesh_edges

```cpp
ModelComponentMeshEdges::SurfaceEdges surface_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices)
```


### surface_component_mesh_edges

```cpp
std::vector<PolygonEdge> surface_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices, const geode::Surface<Model::dim> & surface)
```


### block_component_mesh_edges

```cpp
BRepComponentMeshEdges::BlockEdges block_component_mesh_edges(const BRep & brep, const std::array<index_t, 2> & edge_unique_vertices)
```


### block_component_mesh_edges

```cpp
std::vector<PolyhedronFacetEdge> block_component_mesh_edges(const BRep & brep, const std::array<index_t, 2> & edge_unique_vertices, const Block3D & block)
```


### surface_component_mesh_polygons

```cpp
ModelComponentMeshPolygons::SurfacePolygons surface_component_mesh_polygons(const Model & model, const PolygonVertices & polygon_unique_vertices)
```


### block_component_mesh_polygons

```cpp
BRepComponentMeshPolygons::BlockPolygons block_component_mesh_polygons(const BRep & brep, const PolygonVertices & polygon_unique_vertices)
```


### block_component_mesh_polygons

```cpp
std::vector<PolyhedronFacet> block_component_mesh_polygons(const BRep & brep, const PolygonVertices & polygon_unique_vertices, const Block3D & block)
```




