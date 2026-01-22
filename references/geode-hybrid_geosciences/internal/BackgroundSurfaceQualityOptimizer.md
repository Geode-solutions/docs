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

# class BackgroundSurfaceQualityOptimizer


```cpp
Inherits from TriangulatedSurfaceOptimizerImprovementSimulator2D
```



## Functions

### require_improvement

```cpp
public bool require_improvement(const TriangulatedSurface2D & background, index_t triangle_id)
```




