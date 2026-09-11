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


### initialize_crs

```cpp
void initialize_crs(Mesh & mesh)
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


### add_loaded_mesh_component

```cpp
void add_loaded_mesh_component(ModelBuilder & builder, const MeshComponent & component)
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


### remove_mesh_component

```cpp
void remove_mesh_component(ModelBuilder & builder, const MeshComponent & component)
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
void copy_corner_components(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, Mapping & mapping)
```


### oriented_rotate

```cpp
void oriented_rotate(Container & vertices)
```


### initialize_crs

```cpp
void initialize_crs(Mesh & mesh, const uuid & attribute_id)
```


### add_collection_component

```cpp
void add_collection_component(ModelBuilder & builder, const CollectionComponent & component)
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


### remove_collection_component

```cpp
void remove_collection_component(ModelBuilder & builder, const CollectionComponent & component)
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


### register_basic_pcontext

```cpp
void register_basic_pcontext(PContext & context)
```


### build_model_boundaries

```cpp
void build_model_boundaries(const Section & model, SectionBuilder & builder)
```


### solid_polyhedron_is_a_prism

```cpp
bool solid_polyhedron_is_a_prism(const SolidMesh3D & solid, index_t polyhedron_id)
```


### remove_orientation

```cpp
void remove_orientation(Container & vertices)
```


### model_component

```cpp
const Component<Model::dim> & model_component(Model & model, const uuid & component_id)
```


### save_triangles

```cpp
void save_triangles(const TriangulatedSurface<dimension> & surface, absl::Span<const index_t> indices, std::string_view suffix)
```


### coords_multiply_equal

```cpp
void coords_multiply_equal(Coords<dimension> & input, double multiplier)
```


### copy_line_components

```cpp
void copy_line_components(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, Mapping & mapping)
```


### build_model_boundaries

```cpp
void build_model_boundaries(const BRep & model, BRepBuilder & builder)
```


### coords_divide_equal

```cpp
void coords_divide_equal(Coords<dimension> & input, double divider)
```


### coords_add_equal

```cpp
void coords_add_equal(Coords<dimension> & input, const Coords<dimension> & other)
```


### coords_substract_equal

```cpp
void coords_substract_equal(Coords<dimension> & input, const Coords<dimension> & other)
```


### copy_surface_components

```cpp
void copy_surface_components(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, Mapping & mapping)
```


### copy_block_components

```cpp
void copy_block_components(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, Mapping & mapping)
```


### register_all_components

```cpp
void register_all_components(Model & model)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const VertexCycle<Container> & m)
```


### section_clone_mapping

```cpp
ModelCopyMapping section_clone_mapping(const Section & model)
```


### brep_clone_mapping

```cpp
ModelCopyMapping brep_clone_mapping(const BRep & model)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const OrientedVertexCycle<Container> & m)
```


### copy_model_boundary_components

```cpp
void copy_model_boundary_components(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, Mapping & mapping)
```


### copy_corner_collection_components

```cpp
void copy_corner_collection_components(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, Mapping & mapping)
```


### copy_line_collection_components

```cpp
void copy_line_collection_components(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, Mapping & mapping)
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


### copy_to_generic_mappings

```cpp
ModelGenericMapping copy_to_generic_mappings(const ModelCopyMapping & mappings2)
```


### transfer_brep_meshes

```cpp
void transfer_brep_meshes(const BRep & brep, BRepBuilder & brep_builder, BRep && other, const ModelCopyMapping & component_mapping)
```


### merge_mappings

```cpp
SectionMappings merge_mappings(const SectionMappings & mappings1, const SectionMappings & mappings2)
```


### copy_surface_collection_components

```cpp
void copy_surface_collection_components(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, Mapping & mapping)
```


### transfer_brep_collections

```cpp
void transfer_brep_collections(const BRep & old_brep, const BRep & new_brep, BRepBuilder & new_brep_builder, const ModelGenericMapping & component_mapping)
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
void transfer_brep_metadata(const BRep & old_brep, const BRep & new_brep, BRepBuilder & new_brep_builder, const ModelGenericMapping & component_mapping)
```


### transfer_section_collections

```cpp
void transfer_section_collections(const Section & old_section, const Section & new_section, SectionBuilder & new_brep_builder, const ModelGenericMapping & component_mapping)
```


### transfer_section_metadata

```cpp
void transfer_section_metadata(const Section & old_section, const Section & new_section, SectionBuilder & new_section_builder, const ModelGenericMapping & component_mapping)
```


### save_tetrahedron

```cpp
void save_tetrahedron(const Tetrahedron & tetrahedron, std::string_view suffix)
```


### transfer_section_collections

```cpp
void transfer_section_collections(const Section & old_section, const Section & new_section, SectionBuilder & new_brep_builder, const ModelUnchangedComponentMapping & unchanged_components)
```


### save_tetrahedra

```cpp
void save_tetrahedra(const TetrahedralSolid3D & solid, absl::Span<const index_t> indices, std::string_view suffix)
```


### transfer_pointsets_metadata

```cpp
void transfer_pointsets_metadata(absl::Span<const std::reference_wrapper<const PointSet<Model::dim>>> pointsets, const Model & model, typename Model::Builder & builder, const ModelGenericMapping & component_mapping)
```


### transfer_curves_metadata

```cpp
void transfer_curves_metadata(absl::Span<const std::reference_wrapper<const EdgedCurve<Model::dim>>> curves, const Model & model, typename Model::Builder & model_builder, const ModelGenericMapping & component_mapping)
```


### transfer_surfaces_metadata

```cpp
void transfer_surfaces_metadata(absl::Span<const std::reference_wrapper<const SurfaceMesh<Model::dim>>> surfaces, const Model & model, typename Model::Builder & model_builder, const ModelGenericMapping & component_mapping)
```


### transfer_solids_metadata

```cpp
void transfer_solids_metadata(absl::Span<const std::reference_wrapper<const SolidMesh3D>> solids, const BRep & model, BRepBuilder & model_builder, const ModelGenericMapping & component_mapping)
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


### copy_block_collection_components

```cpp
void copy_block_collection_components(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, Mapping & mapping)
```


### block_component_mesh_edges

```cpp
std::vector<PolyhedronFacetEdge> block_component_mesh_edges(const BRep & brep, const std::array<index_t, 2> & edge_unique_vertices, const Block3D & block)
```


### clone_meshes

```cpp
absl::FixedArray<std::pair<uuid, std::unique_ptr<Mesh>>> clone_meshes(Range && range, index_t nb_components)
```


### copy_corner_geometry

```cpp
void copy_corner_geometry(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, const Mapping & corners)
```


### copy_line_geometry

```cpp
void copy_line_geometry(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, const Mapping & lines)
```


### copy_surface_geometry

```cpp
void copy_surface_geometry(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, const Mapping & surfaces)
```


### copy_block_geometry

```cpp
void copy_block_geometry(const ModelFrom & from, const ModelTo & model_to, typename ModelTo::Builder & builder_to, const Mapping & blocks)
```


### copy_vertex_identifier_components

```cpp
void copy_vertex_identifier_components(const Model & from, BuilderTo & builder_to, index_t first_new_unique_vertex_id, const ModelCopyMapping & mapping)
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




