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

# class BackgroundSolidAspectRatioImprovementSimulator


```cpp
Inherits from BackgroundSolidInternalDistanceImprovementSimulator
```



## Functions

### BackgroundSolidAspectRatioImprovementSimulator

```cpp
public void BackgroundSolidAspectRatioImprovementSimulator(const BackgroundSolid & background, double aspect_ratio_threshold)
```


### ~BackgroundSolidAspectRatioImprovementSimulator

```cpp
public void ~BackgroundSolidAspectRatioImprovementSimulator()
```


### worst

```cpp
public double worst(double metric_tetrahedron_1, double metric_tetrahedron_2)
```


### is_better_after_simulation

```cpp
public bool is_better_after_simulation(const TetrahedraMetrics & tetrahedra_metrics)
```


### metric

```cpp
public double metric(const Tetrahedron & tetrahedron)
```


### require_improvement

```cpp
public bool require_improvement(const BackgroundSolid & background, index_t tetrahedron_id)
```




