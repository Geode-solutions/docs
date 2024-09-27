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

# class BackgroundSolidInternalDistanceImprovementSimulator


```cpp
Inherits from BackgroundSolidImprovementSimulator
```



## Functions

### BackgroundSolidInternalDistanceImprovementSimulator

```cpp
public void BackgroundSolidInternalDistanceImprovementSimulator()
```


### ~BackgroundSolidInternalDistanceImprovementSimulator

```cpp
public void ~BackgroundSolidInternalDistanceImprovementSimulator()
```


### worst

```cpp
protected double worst(double metric_tetrahedron_1, double metric_tetrahedron_2)
```


### is_better_after_simulation

```cpp
protected bool is_better_after_simulation(const TetrahedraMetrics & tetrahedra_metrics)
```


### metric

```cpp
protected double metric(const Tetrahedron & tetrahedron)
```




