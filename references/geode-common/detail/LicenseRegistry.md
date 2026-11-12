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

# class LicenseRegistry


 Common core is a static library linked into every product shared library: the registry must live in the OpenGeode Singleton storage (keyed on the type name) to be shared by all of them. The type is therefore declared in a named namespace, never an anonymous one. No lock is taken when checking a license: products counters are atomic and module ranges are read from an immutable snapshot, replaced on (rare) module registration.



```cpp
Inherits from Singleton
```



## Functions

### LicenseRegistry

```cpp
public void LicenseRegistry()
```


### ~LicenseRegistry

```cpp
public void ~LicenseRegistry()
```


### instance

```cpp
public static LicenseRegistry & instance()
```


### product_id

```cpp
public LicenseProductId product_id(std::string_view feature)
```


### register_module

```cpp
public void register_module(std::string_view feature, std::uintptr_t address)
```


### unregister_module

```cpp
public void unregister_module(std::uintptr_t address)
```


### add_holder

```cpp
public LicenseHolderShard add_holder(LicenseProductId holder, std::uint64_t delegates_mask)
```


### remove_holder

```cpp
public void remove_holder(LicenseProductId holder, LicenseHolderShard shard)
```


### is_caller_delegated

```cpp
public bool is_caller_delegated(LicenseProductId checked)
```


### caller_description

```cpp
public std::string caller_description(LicenseProductId checked, std::string_view checked_name)
```




