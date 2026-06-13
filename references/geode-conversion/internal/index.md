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

* [BlockMappingIdentifier](BlockMappingIdentifier.md)
* [BlocksBuilderFromSolid](BlocksBuilderFromSolid.md)
* [CornersLinesIdentifier](CornersLinesIdentifier.md)
* [UniqueEdgeCatalog](UniqueEdgeCatalog.md)


## Functions

### build_new_model_boundary

```cpp
std::optional<uuid> build_new_model_boundary(const Section & model, SectionBuilder & builder)
```


### build_new_model_boundary

```cpp
std::optional<uuid> build_new_model_boundary(const BRep & model, BRepBuilder & builder)
```


### remove_obsolete_model_boundaries

```cpp
std::vector<uuid> remove_obsolete_model_boundaries(const Section & model, SectionBuilder & builder)
```


### remove_obsolete_model_boundaries

```cpp
std::vector<uuid> remove_obsolete_model_boundaries(const BRep & model, BRepBuilder & builder)
```


### identify_surfaces

```cpp
void identify_surfaces(const Model & model, typename Model::Builder & builder, const typename detail::CornersLinesBuilder<Model> & wireframe, typename TypedModelMappings<Model>::type & mappings, absl::Span<const uuid> old_surface_ids, bool merge_components_if_no_boundaries)
```


### add_block_boundaries_as_surfaces_in_model

```cpp
void add_block_boundaries_as_surfaces_in_model(const BRep & model, BRepBuilder & builder)
```


### build_new_model_boundary

```cpp
std::optional<uuid> build_new_model_boundary(const Model & model, typename Model::Builder & builder)
```

### identify_blocks

```cpp
void identify_blocks(const BRep & model, BRepBuilder & builder, BRepMappings & mappings)
```


### remove_obsolete_model_boundaries

```cpp
std::vector<geode::uuid> remove_obsolete_model_boundaries(const Model & model, typename Model::Builder & builder)
```

### map_old_to_new_mesh_vertices

```cpp
void map_old_to_new_mesh_vertices(const MeshVertex & old_mesh_vertex, const MeshVertex & new_mesh_vertex, MeshVertexMapping & mesh_vertex_mapping, absl::Span<const uuid> old_mesh_ids)
```


### map_old_to_new_mesh_elements

```cpp
void map_old_to_new_mesh_elements(const MeshElement & old_mesh_element, const MeshElement & new_mesh_element, MeshElementMapping & mesh_element_mapping, absl::Span<const uuid> old_mesh_ids)
```


### transfer_relationships

```cpp
void transfer_relationships(const Model & model, typename Model::Builder & model_builder, const Component<Model::dim> & old_component, const Component<Model::dim> & new_component)
```


### find_duplicated_components

```cpp
std::vector<std::vector<uuid>> find_duplicated_components(const Model & model, const ComponentRange & components)
```


### transfer_corner_metadata

```cpp
void transfer_corner_metadata(const Model & model, typename Model::Builder & model_builder, const uuid & new_corner_id, absl::Span<const uuid> old_corner_ids)
```


### transfer_line_metadata

```cpp
void transfer_line_metadata(const Model & model, typename Model::Builder & model_builder, const uuid & new_line_id, absl::Span<const uuid> old_line_ids)
```


### transfer_surface_metadata

```cpp
void transfer_surface_metadata(const Model & model, typename Model::Builder & model_builder, const uuid & new_surface_id, absl::Span<const uuid> old_surface_ids)
```


### split_surfaces_on_internal_lines

```cpp
void split_surfaces_on_internal_lines(const Model & model, typename Model::Builder & model_builder, MeshVertexMapping & surface_vertex_mapping)
```




