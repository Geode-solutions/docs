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


## Functions

### ModelBuilderFromMeshes

```cpp
public void ModelBuilderFromMeshes<Model>(Model & model, absl::Span<const std::reference_wrapper<const PointSet<dimension> > > corners, absl::Span<const std::reference_wrapper<const EdgedCurve<dimension> > > curves, absl::Span<const std::reference_wrapper<const SurfaceMesh<dimension> > > surfaces)
```


### ~ModelBuilderFromMeshes

```cpp
public void ~ModelBuilderFromMeshes<Model>()
```


### build_model

```cpp
public TypedModelMappings build_model()
```




# class ModelBuilderFromMeshes


# class ModelBuilderFromMeshes


