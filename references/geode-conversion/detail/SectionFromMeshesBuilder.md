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

# class SectionFromMeshesBuilder


```cpp
Inherits from ModelBuilderFromMeshes<Section>
```



## Functions

### SectionFromMeshesBuilder

```cpp
public void SectionFromMeshesBuilder(Section & brep, absl::Span<const std::reference_wrapper<const PointSet2D> > corners, absl::Span<const std::reference_wrapper<const EdgedCurve2D> > curves, absl::Span<const std::reference_wrapper<const SurfaceMesh2D> > surfaces)
```


### ~SectionFromMeshesBuilder

```cpp
public void ~SectionFromMeshesBuilder()
```


### build_section

```cpp
public ModelMappings build_section()
```




