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

# class SimulationPrinter


## Functions

### SimulationPrinter

```cpp
public void SimulationPrinter<ObjectType>(const Model<ObjectType> & model, SimulationPrinterConfigurator config)
```


### print_statistics

```cpp
public void print_statistics(const std::vector<double> & stats)
```


### print_statistics_summary

```cpp
public void print_statistics_summary(const StatisticsTracker<ObjectType> & tracker)
```


### print_object_sets

```cpp
public void print_object_sets(const ObjectSets<ObjectType> & object_sets, index_t realization_id)
```




