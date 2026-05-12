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

# class BlockMappingIdentifier


## Functions

### BlockMappingIdentifier

```cpp
public void BlockMappingIdentifier(const BRep & model, Span blocks)
```


### ~BlockMappingIdentifier

```cpp
public void ~BlockMappingIdentifier()
```


### create_block_mappings

```cpp
public GenericMapping create_block_mappings()
```




