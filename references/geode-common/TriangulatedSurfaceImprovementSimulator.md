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

# class TriangulatedSurfaceImprovementSimulator


# class TriangulatedSurfaceImprovementSimulator


# class TriangulatedSurfaceImprovementSimulator


## Records

TrianglesMetrics



## Functions

### ~TriangulatedSurfaceImprovementSimulator

```cpp
public void ~TriangulatedSurfaceImprovementSimulator<dimension>()
```


### worst

```cpp
public double worst(double metric_triangle_1, double metric_triangle_2)
```

### is_better_after_simulation

```cpp
public bool is_better_after_simulation(const TrianglesMetrics & triangles_metrics)
```

### metric

```cpp
public double metric(const Triangle<dimension> & triangle)
```

### TriangulatedSurfaceImprovementSimulator

```cpp
protected void TriangulatedSurfaceImprovementSimulator<dimension>()
```




