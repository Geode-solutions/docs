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

# class LicenseScope


 Proof of a successful license check. While a LicenseScope of a product licensed on its own is alive, the products it delegates (listed in its signed license) are granted to the code of this product and of the products it delegates (see detail/license_registry.hpp).



## Functions

### LicenseScope

```cpp
public void LicenseScope()
```


### LicenseScope

```cpp
public void LicenseScope(detail::LicenseProductId holder, std::uint64_t delegates_mask)
```


### LicenseScope

```cpp
public void LicenseScope(LicenseScope && other)
```


### operator=

```cpp
public LicenseScope & operator=(LicenseScope && other)
```


### LicenseScope

```cpp
public void LicenseScope(const LicenseScope & )
```


### operator=

```cpp
public LicenseScope & operator=(const LicenseScope & )
```


### ~LicenseScope

```cpp
public void ~LicenseScope()
```




