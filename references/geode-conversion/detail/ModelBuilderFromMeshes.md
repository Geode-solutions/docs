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

# class ModelBuilderFromMeshes


```cpp
Inherits from CornersLinesBuilder<Model>
```



## Functions

### ~ModelBuilderFromMeshes

```cpp
public void ~ModelBuilderFromMeshes<Model>()
```


### build_wireframe_step

```cpp
public void build_wireframe_step()
```


### is_corner

```cpp
public bool is_corner(index_t wireframe_vertex_id)
```


### build_surfaces

```cpp
public typename TypedModelMappings<Model>::type build_surfaces()
```


### ModelBuilderFromMeshes

```cpp
protected void ModelBuilderFromMeshes<Model>(Model & model, absl::Span<const std::reference_wrapper<const PointSet<dimension> > > corners, absl::Span<const std::reference_wrapper<const EdgedCurve<dimension> > > curves, absl::Span<const std::reference_wrapper<const SurfaceMesh<dimension> > > surfaces)
```




# class ModelBuilderFromMeshes


```cpp
Inherits from CornersLinesBuilder<Section>
```



# class ModelBuilderFromMeshes


```cpp
Inherits from CornersLinesBuilder<BRep>
```



