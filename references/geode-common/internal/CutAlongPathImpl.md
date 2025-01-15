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

# class CutAlongPathImpl


# class CutAlongPathImpl


# class CutAlongPathImpl


## Functions

### ~CutAlongPathImpl

```cpp
public void ~CutAlongPathImpl<dimension>()
```


### perform_cut

```cpp
public SurfaceCutPathInfo<dimension> perform_cut()
```


### CutAlongPathImpl

```cpp
protected void CutAlongPathImpl<dimension>(const TriangulatedSurface<dimension> & surface, absl::Span<const GeometricSurfacePath<dimension> > path_splits)
```




