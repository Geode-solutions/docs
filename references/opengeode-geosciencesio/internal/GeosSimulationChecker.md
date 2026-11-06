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

# class GeosSimulationChecker


 Checks that a GEOS deck can be written for a problem on a model. Registered as GEOS_SIMULATOR_KEY, it does not know the exporter wells and regions: source term wells and the assignment of materials to GEOS regions merging several Blocks (e.g. StratigraphicUnits) are only checked with GeosExportData.



```cpp
Inherits from SimulationChecker
```



## Functions

### GeosSimulationChecker

```cpp
public void GeosSimulationChecker(const PhysicalProblem & problem, const BRep & model)
```


### GeosSimulationChecker

```cpp
public void GeosSimulationChecker(const PhysicalProblem & problem, const BRep & model, GeosExportData export_data)
```




