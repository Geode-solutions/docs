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

# class PillarStructuralModelBuilder


## Functions

### PillarStructuralModelBuilder

```cpp
public void PillarStructuralModelBuilder(const StructuralModel & model, Span top_surfaces, Span bottom_surfaces)
```


### PillarStructuralModelBuilder

```cpp
public void PillarStructuralModelBuilder(PillarStructuralModelBuilder && other)
```


### ~PillarStructuralModelBuilder

```cpp
public void ~PillarStructuralModelBuilder()
```


### is_model_construction_possible

```cpp
public bool is_model_construction_possible()
```


### build

```cpp
public StructuralModel build(const PillarStructuralModelOptions & options)
```




