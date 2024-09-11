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

# class AddInspectors


 This mixin represents an assembly of inspectors. Syntax to create a derivated class is class DerivateClass : public AddInspectors< dimension, Mesh, InspectorClassA, InspectorClassB, InspectorClassC >, public OtherOptionalMixins



```cpp
Inherits from Inspectors
```



## Functions

### AddInspectors

```cpp
protected void AddInspectors<Mesh, Inspectors...>(const Mesh & mesh)
```


### AddInspectors

```cpp
protected void AddInspectors<Mesh, Inspectors...>(AddInspectors<Mesh, Inspectors...> && )
```




