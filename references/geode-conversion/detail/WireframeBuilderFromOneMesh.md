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

# class WireframeBuilderFromOneMesh


```cpp
Inherits from CornersLinesBuilder<Model>
```



## Records

SplitEdge



## Functions

### ~WireframeBuilderFromOneMesh

```cpp
public void ~WireframeBuilderFromOneMesh<Model, Mesh>()
```


### build_wireframe_step

```cpp
public void build_wireframe_step()
```


### is_corner

```cpp
public bool is_corner(index_t vertex)
```


### mappings

```cpp
public IndexToModelMeshElementsMapping mappings()
```


### WireframeBuilderFromOneMesh

```cpp
protected void WireframeBuilderFromOneMesh<Model, Mesh>(Model & model, const Mesh & one_mesh)
```


### add_corner_vertices

```cpp
protected void add_corner_vertices(Span additional_corner_vertices)
```


### corner_vertices

```cpp
protected const std::vector<index_t> & corner_vertices()
```


### add_line_edges

```cpp
protected void add_line_edges(Span additional_line_edges)
```


### line_edges

```cpp
protected const std::vector<index_t> & line_edges()
```


### update_corner_line_mappings

```cpp
protected void update_corner_line_mappings()
```


### build_surfaces

```cpp
protected std::vector<SplitEdge> build_surfaces(const SurfaceMesh<dimension> & whole_surface, const absl::flat_hash_map<index_t, index_t> & whole_surface_to_one_mesh_vertices, Span whole_surface_to_one_mesh_polygons, WireframeBuilderFromOneMesh<Model, Mesh>::ModelModifier & model_modifer)
```


### build_surfaces_without_split

```cpp
protected void build_surfaces_without_split(const SurfaceMesh<dimension> & whole_surface, const absl::flat_hash_map<index_t, index_t> & whole_surface_to_one_mesh_vertices, Span whole_surface_to_one_mesh_polygons)
```




# class WireframeBuilderFromOneMesh


```cpp
Inherits from CornersLinesBuilder<Section>
```



# class WireframeBuilderFromOneMesh


```cpp
Inherits from CornersLinesBuilder<BRep>
```



