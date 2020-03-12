const state =
    {
        attributes: [],
        isVariationSelected: true,
        selectedAttributes: {},
        selectedUnit: null,
        units: [],
        variations: []
    };

const mutations =
    {
        setIsVariationSelected(state, isVariationSelected)
        {
            state.isVariationSelected = !!isVariationSelected;
        },

        setItemAttributes(state, attributes)
        {
            state.attributes = attributes;
        },

        setItemSelectedAttributes(state, selectedAttributes)
        {
            state.selectedAttributes = selectedAttributes;
        },

        selectItemAttribute(state, { attributeId, attributeValueId })
        {
            state.selectedAttributes[attributeId] = attributeValueId;
        },

        selectItemUnit(state, selectedUnit)
        {
            state.selectedUnit = selectedUnit;
        },

        setItemVariations(state, variations)
        {
            state.variations = variations;
        },

        setUnits(state, units)
        {
            state.units = units;
        }
    };

const actions =
    {
        // eslint-disable-next-line complexity
        setVariationSelect({ commit }, state)
        {
            const attributes         = state.attributes;
            const variations         = state.variations;
            const initialVariation   = variations.find(variation => state.initialVariationId === parseInt(variation.variationId));
            const initialUnit        = initialVariation && initialVariation.unitCombinationId || null;
            const selectedAttributes = {};
            const units              = {};

            for (const attribute of attributes)
            {
                let variationAttribute;

                if ((App.config.item.showPleaseSelect && state.isPleaseSelectOption) || !initialVariation)
                {
                    selectedAttributes[attribute.attributeId] = -1;
                }
                else
                {
                    variationAttribute = initialVariation.attributes.find(variationAttribute => variationAttribute.attributeId === attribute.attributeId);
                    selectedAttributes[attribute.attributeId] = variationAttribute ? variationAttribute.attributeValueId : null;
                }

            }

            for (const variation of variations)
            {
                units[variation.unitCombinationId] = variation.unitName;
            }

            commit("selectItemUnit", initialUnit);
            commit("setItemAttributes", attributes);
            commit("setItemSelectedAttributes", selectedAttributes);
            commit("setItemVariations", variations);
            commit("setUnits", units);
        }
    };

const getters =
    {
    };

export default
{
    state,
    actions,
    mutations,
    getters
};
