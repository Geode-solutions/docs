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

# namespace internal



## Records

* [CrossSectionSurfaceImpliciter](CrossSectionSurfaceImpliciter.md)
* [CutSolidGrid](CutSolidGrid.md)
* [CutSurfaceGrid](CutSurfaceGrid.md)
* [DuplicatedCell2D](DuplicatedCell2D.md)
* [DuplicatedCell3D](DuplicatedCell3D.md)
* [ImplicitDataManager](ImplicitDataManager.md)
* [ImplicitSVGInput](ImplicitSVGInput.md)
* [StratigraphicLSOInput](StratigraphicLSOInput.md)
* [StructuralModelBlockImpliciter](StructuralModelBlockImpliciter.md)


