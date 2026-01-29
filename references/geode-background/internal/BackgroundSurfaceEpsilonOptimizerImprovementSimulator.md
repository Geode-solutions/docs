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

# class BackgroundSurfaceEpsilonOptimizerImprovementSimulator


```cpp
Inherits from TriangulatedSurfaceInternalDistanceImprovementSimulator2D
```



## Functions

### metric

```cpp
public double metric(const Triangle2D & triangle)
```


### require_improvement

```cpp
public bool require_improvement(const TriangulatedSurface2D & surface, index_t triangle_id)
```




