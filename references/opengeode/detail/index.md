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

### mapping_after_deletion

```cpp
vector mapping_after_deletion(const std::vector<bool> & to_delete)
```


### polygon_sort

```cpp
void polygon_sort(Container & vertices)
```


### oriented_rotate

```cpp
void oriented_rotate(Container & vertices)
```


### oriented_rotate

```cpp
void oriented_rotate(std::array<index_t, 2> & vertices)
```


### remove_orientation

```cpp
void remove_orientation(Container & vertices)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const VertexCycle<Container> & m)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const OrientedVertexCycle<Container> & m)
```


### coords_multiply

```cpp
Coords<dimension> coords_multiply(const Coords<dimension> & input, double multiplier)
```


### coords_divide

```cpp
Coords<dimension> coords_divide(const Coords<dimension> & input, double divider)
```


### coords_add

```cpp
Coords<dimension> coords_add(const Coords<dimension> & input, const Coords<dimension> & other)
```


### coords_substract

```cpp
Coords<dimension> coords_substract(const Coords<dimension> & input, const Coords<dimension> & other)
```


### coords_multiply_equal

```cpp
void coords_multiply_equal(Coords<dimension> & input, double multiplier)
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


### update_default_name

```cpp
void update_default_name(Object & object, basic_string_view filename)
```


### update_default_name

```cpp
void update_default_name(std::unique_ptr<Object> & object, basic_string_view filename)
```


### geode_object_input_reader

```cpp
std::unique_ptr<typename Factory::BaseClass> geode_object_input_reader(std::string_view & filename)
```


### geode_object_input_impl

```cpp
typename Factory::BaseClass::InputData geode_object_input_impl(basic_string_view type, basic_string_view filename, Args... args)
```


### add_to_message

```cpp
void add_to_message(std::string & message, geode::index_t nb_components, basic_string_view component_text)
```


### geode_object_output_writer

```cpp
std::unique_ptr<typename Factory::BaseClass> geode_object_output_writer(std::string_view & filename)
```


### geode_object_output_impl

```cpp
vector geode_object_output_impl(basic_string_view type, const Object & object, basic_string_view filename)
```


### position_to_index

```cpp
local_index_t position_to_index(POSITION position)
```


### filter_unsupported_components

```cpp
void filter_unsupported_components(Model & model)
```


### add_mesh_component

```cpp
void add_mesh_component(ModelBuilder & builder, const MeshComponent & component)
```


### remove_mesh_component

```cpp
void remove_mesh_component(ModelBuilder & builder, const MeshComponent & component)
```


### add_collection_component

```cpp
void add_collection_component(ModelBuilder & builder, const CollectionComponent & component)
```


### remove_collection_component

```cpp
void remove_collection_component(ModelBuilder & builder, const CollectionComponent & component)
```


### register_all_components

```cpp
void register_all_components(Model & model)
```


### load_brep_files

```cpp
void load_brep_files(Model & brep, basic_string_view directory)
```


### load_section_files

```cpp
void load_section_files(Model & section, basic_string_view directory)
```


### create_mesh

```cpp
std::unique_ptr<Mesh> create_mesh(absl::Span<const std::reference_wrapper<const Mesh> > meshes)
```


### save_segment

```cpp
void save_segment(const Segment<dimension> & segment, basic_string_view suffix)
```


### save_triangle

```cpp
void save_triangle(const Triangle<dimension> & triangle, basic_string_view suffix)
```


### save_triangles

```cpp
void save_triangles(const TriangulatedSurface<dimension> & surface, Span indices, basic_string_view suffix)
```


### save_tetrahedron

```cpp
void save_tetrahedron(const Tetrahedron & tetrahedron, basic_string_view suffix)
```


### save_tetrahedra

```cpp
void save_tetrahedra(const TetrahedralSolid3D & solid, Span indices, basic_string_view suffix)
```


### solid_polyhedron_is_a_tetrahedron

```cpp
bool solid_polyhedron_is_a_tetrahedron(const SolidMesh3D & solid, index_t polyhedron_id)
```


### solid_polyhedron_is_a_hexaedron

```cpp
bool solid_polyhedron_is_a_hexaedron(const SolidMesh3D & solid, index_t polyhedron_id)
```


### solid_polyhedron_is_a_pyramid

```cpp
bool solid_polyhedron_is_a_pyramid(const SolidMesh3D & solid, index_t polyhedron_id)
```


### solid_polyhedron_is_a_prism

```cpp
bool solid_polyhedron_is_a_prism(const SolidMesh3D & solid, index_t polyhedron_id)
```


### polygons_intersection_detection

```cpp
bool polygons_intersection_detection(const Mesh & mesh, const PolygonVertices & polygon, const PolygonVertices & other_polygon)
```


### line_component_mesh_edges

```cpp
flat_hash_map line_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices)
```


### line_component_mesh_edges

```cpp
vector line_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices, const geode::Line<Model::dim> & line)
```


### surface_component_mesh_edges

```cpp
flat_hash_map surface_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices)
```


### surface_component_mesh_edges

```cpp
vector surface_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices, const geode::Surface<Model::dim> & surface)
```


### block_component_mesh_edges

```cpp
flat_hash_map block_component_mesh_edges(const BRep & brep, const std::array<index_t, 2> & edge_unique_vertices)
```


### block_component_mesh_edges

```cpp
vector block_component_mesh_edges(const BRep & brep, const std::array<index_t, 2> & edge_unique_vertices, const Block3D & block)
```


### surface_component_mesh_polygons

```cpp
flat_hash_map surface_component_mesh_polygons(const Model & model, const PolygonVertices & polygon_unique_vertices)
```


### block_component_mesh_polygons

```cpp
flat_hash_map block_component_mesh_polygons(const BRep & brep, const PolygonVertices & polygon_unique_vertices)
```


### block_component_mesh_polygons

```cpp
vector block_component_mesh_polygons(const BRep & brep, const PolygonVertices & polygon_unique_vertices, const Block3D & block)
```


### copy_corner_components

```cpp
void copy_corner_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_line_components

```cpp
void copy_line_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_surface_components

```cpp
void copy_surface_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_block_components

```cpp
void copy_block_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_model_boundary_components

```cpp
void copy_model_boundary_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
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


### copy_block_collection_components

```cpp
void copy_block_collection_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### clone_meshes

```cpp
absl::FixedArray<std::pair<uuid, std::unique_ptr<Mesh> > > clone_meshes(Range && range, index_t nb_components)
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


### repair_non_manifold_vertices

```cpp
GenericMapping repair_non_manifold_vertices(const SolidMesh<dimension> & mesh, SolidMeshBuilder<dimension> & builder)
```


### repair_non_manifold_vertices

```cpp
GenericMapping repair_non_manifold_vertices(const Model & model, typename Model::Builder & builder, const Surface<Model::dim> & surface)
```


### repair_non_manifold_vertices

```cpp
GenericMapping repair_non_manifold_vertices(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder)
```


### count_range_elements

```cpp
index_t count_range_elements(const Range & range)
```


### section_clone_mapping

```cpp
ModelMapping section_clone_mapping(const Section & model)
```


### brep_clone_mapping

```cpp
ModelMapping brep_clone_mapping(const BRep & model)
```


### transfer_brep_collections

```cpp
void transfer_brep_collections(const BRep & old_brep, const BRep & new_brep, BRepBuilder & new_brep_builder, const ModelGenericMapping & component_mapping)
```


### transfer_section_collections

```cpp
void transfer_section_collections(const Section & old_section, const Section & new_section, SectionBuilder & new_brep_builder, const ModelGenericMapping & component_mapping)
```


### transfer_brep_metadata

```cpp
void transfer_brep_metadata(const BRep & old_brep, BRepBuilder & new_brep_builder, const ModelGenericMapping & component_mapping)
```


### transfer_section_metadata

```cpp
void transfer_section_metadata(const Section & old_section, SectionBuilder & new_brep_builder, const ModelGenericMapping & component_mapping)
```


### transfer_pointsets_metadata

```cpp
void transfer_pointsets_metadata(absl::Span<const std::reference_wrapper<const PointSet<ModelBuilder::dim> > > pointsets, ModelBuilder & model_builder, const ModelGenericMapping & component_mapping)
```


### transfer_curves_metadata

```cpp
void transfer_curves_metadata(absl::Span<const std::reference_wrapper<const EdgedCurve<ModelBuilder::dim> > > curves, ModelBuilder & model_builder, const ModelGenericMapping & component_mapping)
```


### transfer_surfaces_metadata

```cpp
void transfer_surfaces_metadata(absl::Span<const std::reference_wrapper<const SurfaceMesh<ModelBuilder::dim> > > surfaces, ModelBuilder & model_builder, const ModelGenericMapping & component_mapping)
```


### transfer_solids_metadata

```cpp
void transfer_solids_metadata(Span solids, BRepBuilder & model_builder, const ModelGenericMapping & component_mapping)
```


### model_component

```cpp
const Component<Model::dim> & model_component(Model & model, const uuid & component_id)
```


### register_basic_pcontext

```cpp
void register_basic_pcontext(PContext & context)
```


### register_inlinedvector

```cpp
void register_inlinedvector(PContext & context, basic_string_view type)
```


### register_geometry_pcontext

```cpp
void register_geometry_pcontext(PContext & context)
```


### build_model_boundaries

```cpp
void build_model_boundaries(const Section & model, SectionBuilder & builder)
```


### build_model_boundaries

```cpp
void build_model_boundaries(const BRep & model, BRepBuilder & builder)
```


### merge_mappings

```cpp
ModelMapping merge_mappings(const ModelGenericMapping & mappings1, const ModelCopyMapping & mappings2)
```


### merge_mappings

```cpp
ModelMapping merge_mappings(const ModelGenericMapping & mappings1, const ModelGenericMapping & mappings2)
```


### copy_to_generic_mappings

```cpp
ModelMapping copy_to_generic_mappings(const ModelCopyMapping & mappings2)
```


### merge_mappings

```cpp
SectionMappings merge_mappings(const SectionMappings & mappings1, const SectionMappings & mappings2)
```


### merge_mappings

```cpp
BRepMappings merge_mappings(const BRepMappings & mappings1, const BRepMappings & mappings2)
```


### repair_non_manifold_vertices

```cpp
GenericMapping repair_non_manifold_vertices(const BRep & model, BRepBuilder & builder, const Block3D & block)
```




