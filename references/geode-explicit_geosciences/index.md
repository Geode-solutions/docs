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

# namespace geode



## Records

* [ExplicitGeosciencesGeosciencesLibrary](ExplicitGeosciencesGeosciencesLibrary.md)
* [StructuralModelExplicitModeler](StructuralModelExplicitModeler.md)
* [uuid](uuid.md)


## Functions

### inspect_generated_structural_model

```cpp
void inspect_generated_structural_model(const StructuralModel & model)
```


### inspect_generated_structural_model_without_block_topology

```cpp
void inspect_generated_structural_model_without_block_topology(const StructuralModel & model)
```




