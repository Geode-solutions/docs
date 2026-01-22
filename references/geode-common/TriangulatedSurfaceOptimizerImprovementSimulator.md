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

# class TriangulatedSurfaceOptimizerImprovementSimulator


```cpp
Inherits from TriangulatedSurfaceInternalDistanceImprovementSimulator<3U>
```



# class TriangulatedSurfaceOptimizerImprovementSimulator


```cpp
Inherits from TriangulatedSurfaceInternalDistanceImprovementSimulator<2U>
```



# class TriangulatedSurfaceOptimizerImprovementSimulator


```cpp
Inherits from TriangulatedSurfaceInternalDistanceImprovementSimulator<dimension>
```



## Functions

### compute_metric

```cpp
public double compute_metric(const Triangle<dimension> & triangle)
```


### require_improvement

```cpp
public bool require_improvement(const TriangulatedSurface<dimension> & triangulated, index_t triangle_id)
```




