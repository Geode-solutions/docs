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

# class TriangulatedSurfaceDecimatorOperator


# class TriangulatedSurfaceDecimatorOperator


## Functions

### skip_edge

```cpp
public bool skip_edge(const TriangulatedSurface<dimension> & surface, const PolygonEdge & edge)
```

### TriangulatedSurfaceDecimatorOperator

```cpp
protected void TriangulatedSurfaceDecimatorOperator<dimension>(const TriangulatedSurface<dimension> & triangulated)
```


### ~TriangulatedSurfaceDecimatorOperator

```cpp
public void ~TriangulatedSurfaceDecimatorOperator<dimension>()
```


### triangulated

```cpp
protected const TriangulatedSurface<dimension> & triangulated()
```




# class TriangulatedSurfaceDecimatorOperator


