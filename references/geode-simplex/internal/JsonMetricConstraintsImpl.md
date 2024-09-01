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

# class JsonMetricConstraintsImpl


```cpp
Inherits from MetricConstraintsImpl<Model>
```



## Functions

### JsonMetricConstraintsImpl

```cpp
public void JsonMetricConstraintsImpl<Model>(const Model & model)
```


### import_constraints

```cpp
public void import_constraints(basic_string_view filename)
```


### export_constraints

```cpp
public void export_constraints(basic_string_view filename)
```




