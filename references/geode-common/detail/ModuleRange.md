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

# struct ModuleRange


 Executable address range of a module, owned by a product or by a runtime library (thread start, unwinder, dynamic loader...)



## Members

```cpp
public std::uintptr_t begin

```

```cpp
public std::uintptr_t end

```

```cpp
public std::uint8_t product

```



