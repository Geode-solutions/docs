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

# class TargetStatistics


## Functions

### TargetStatistics

```cpp
public void TargetStatistics<ObjectType>(const Model<ObjectType> & model, const std::vector<TargetStatisticConfig> & statistic_targets)
```


### model

```cpp
public const Model<ObjectType> & model()
```


### has_target

```cpp
public bool has_target(const uuid & term_uuid)
```


### target

```cpp
public double target(const uuid & term_uuid)
```


### tolerance

```cpp
public double tolerance(const uuid & term_uuid)
```


### active_terms

```cpp
public std::vector<uuid> active_terms()
```




